## [`Rx.Observable.prototype.concatMap(selector, [resultSelector])`, `Rx.Observable.prototype.flatMapConcat(selector, [resultSelector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/concatmap.js)

{% if book.isPdf %}

![concatMap](http://reactivex.io/documentation/operators/images/concatMap.png)

{% else %}



{% endif %}

This is an alias for the `flatMapConcat` method. This can be one of the following:

Projects each element of an observable sequence to an observable sequence and concatenates the resulting observable sequences or Promises or array/iterable into one observable sequence.

```js
source.concatMap(function (x, i) { return Rx.Observable.range(0, x); });
source.concatMap(function (x, i) { return Promise.resolve(x + 1); });
source.concatMap(function (x, i) { return [x, i]; });
```

Projects each element of an observable sequence or Promise to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and concatenates the results into one observable sequence.

```js
source.concatMap(function (x, i) { return Rx.Observable.range(0, x); }, function (x, y, ix, iy) { return x + y + ix + iy; });
source.concatMap(function (x, i) { return Promise.resolve(x + i); }, function (x, y, ix, iy) { return x + y + ix + iy; });
source.concatMap(function (x, i) { return [x, i];  }, function (x, y, ix, iy) { return x + y + ix + iy; });
```

Projects each element of the source observable sequence to the other observable sequence or Promise or array/iterable and merges the resulting observable sequences into one observable sequence.
 
 ```js
source.concatMap(Rx.Observable.of(1,2,3));
source.concatMap(Promise.resolve(42));
source.concatMap([1,2,3]);
 ```

#### Arguments
1. `selector` *(`Function` | `Iterable` | `Promise`)*:  An Object to project to the sequence or a transform function to apply to each element or an observable sequence to project each element from the source sequence onto.  The selector is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed

2. `[resultSelector]` *(`Function`)*: A transform function to apply to each element of the intermediate sequence.  The resultSelector is called with the following information:
    1. the value of the outer element
    2. the value of the inner element
    3. the index of the outer element
    4. the index of the inner element

3. `[thisArg]` *(`Any`)*: If `resultSelector` is not `Function`, Object to use as `this` when executing `selector`.

#### Returns
*(`Observable`)*: An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.   

#### Example

[](http://jsbin.com/verid/1/embed?js,console)

##### Using a promise

[](http://jsbin.com/yaboy/1/embed?js,console)

##### Using an array

```js
var source = Rx.Observable.of(1,2,3)
  .concatMap(
    function (x, i) { return [x,i]; },
    function (x, y, ix, iy) { return x + y + ix + iy; }
  );

var subscription = source.subscribe(
    function (x) {
        console.log('Next: %s', x);
    },
    function (err) {
        console.log('Error: %s', err);
    },
    function () {
        console.log('Completed');
    });

// => Next: 2
// => Next: 2
// => Next: 5
// => Next: 5
// => Next: 8
// => Next: 8
// => Completed
```