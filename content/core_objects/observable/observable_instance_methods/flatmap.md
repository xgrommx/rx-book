# flatMap

`Rx.Observable.prototype.flatMap(selector, [resultSelector])`
<a href="#rxobservableprototypeflatmapselector-resultselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L4311-L4326 "View in source") 

This is an alias for the `selectMany` method.

One of the following:

Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.

```js
source.flatMap(function (x) { return Rx.Observable.range(0, x); });
```

Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.

```js
source.flatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
```

Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
 
 ```js
source.flatMap(Rx.Observable.fromArray([1,2,3]));
 ```

#### Arguments
1. `selector` *(`Function`)*:  A transform function to apply to each element or an observable sequence to project each element from the source sequence onto.
2. `[resultSelector]` *(`Function`)*: A transform function to apply to each element of the intermediate sequence.
 
#### Returns
*(`Observable`)*: An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.   

#### Example
```js
var source = Rx.Observable
    .range(1, 2)
    .flatMap(function (x) {
        return Rx.Observable.range(x, 2);    
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
// => Next: 2 
// => Next: 2 
// => Next: 3 
// => Completed 
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx)