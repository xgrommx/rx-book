## [`Rx.Observable.prototype.flatMap(selector, [resultSelector])`, `Rx.Observable.prototype.selectMany(selector, [resultSelector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/selectmany.js)

{% if book.isPdf %}

![flatMap](http://reactivex.io/documentation/operators/images/flatMap.png)

{% else %}



{% endif %}

One of the following:

Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences or Promises or array/iterable into one observable sequence.

```js
source.selectMany(function (x, i) { return Rx.Observable.range(0, x); });
source.selectMany(function (x, i) { return Promise.resolve(x + 1); });
source.selectMany(function (x, i) { return [x, i]; });
```

Projects each element of an observable sequence or Promise to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.

```js
source.selectMany(function (x, i) { return Rx.Observable.range(0, x); }, function (x, y, ix, iy) { return x + y + ix + iy; });
source.selectMany(function (x, i) { return Promise.resolve(x + i); }, function (x, y, ix, iy) { return x + y + ix + iy; });
source.selectMany(function (x, i) { return [x, i]; }, function (x, y, ix, iy) { return x + y + ix + iy; });
```

Projects each element of the source observable sequence to the other observable sequence or Promise, or array/iterable and merges the resulting observable sequences into one observable sequence.

 ```js
source.selectMany(Rx.Observable.of(1,2,3));
source.selectMany(Promise.resolve(42));
source.selectMany([1,2,3]);
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

#### Returns
*(`Observable`)*: An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
 

#### Example

[](http://jsbin.com/besiw/1/embed?js,console)

```js
/* Using a promise */
var source = Rx.Observable.of(1,2,3,4)
  .selectMany(function (x, i) {
    return Promise.resolve(x + i);
  });

var subscription = source.subscribe(
  function (x) {
    console.log('Next: ' + x);
  },
  function (err) {
    console.log('Error: ' + err);
  },
  function () {
    console.log('Completed');
  });

// => Next: 1
// => Next: 3
// => Next: 5
// => Next: 7
// => Completed

/* Using an array */
Rx.Observable.of(2, 3, 5).selectMany(
  function(x) {
    // Return x^2, x^3 and x^4
    return [
      x * x,
      x * x * x,
      x * x * x * x
    ];
  },

  function(outer, inner, outerIndex, innerIndex) {
    return { outer : outer, inner : inner, outerIdx : outerIndex, innerIdx : innerIndex };
  }
).subscribe(
  function(next) {
    console.log(
      'Outer: ' + next.outer + ', Inner: ' + next.inner +
      ', InnerIndex: ' + next.innerIdx + ', OuterIndex: ' + next.outerIdx
    );
  },

  function() {
    console.log('Completed');
  }
);

//=> Outer: 2, Inner: 4, InnerIndex : 0, OuterIndex : 0
//=> Outer: 2, Inner: 8, InnerIndex : 1, OuterIndex : 0
//=> Outer: 2, Inner: 16, InnerIndex : 2, OuterIndex : 0
//=> Outer: 3, Inner: 9, InnerIndex : 0, OuterIndex : 1
//=> Outer: 3, Inner: 27, InnerIndex : 1, OuterIndex : 1
//=> Outer: 3, Inner: 81, InnerIndex : 2, OuterIndex : 1
//...etc
//=> Completed
```