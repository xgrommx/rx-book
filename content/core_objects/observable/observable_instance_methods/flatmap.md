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

[](http://jsbin.com/besiw/1/embed?js,console)

##### New features

```js
Rx.Observable.prototype.flatMap(collection: Observable<T>)
Rx.Observable.prototype.flatMap(collectionSelector: (T => Observable<U>));
Rx.Observable.prototype.flatMap(collectionSelector: (T => Observable<U>), resultSelector: ((T, U, Int) => Z));

// With Promises
Rx.Observable.prototype.flatMap(collection: Promise<T>)
Rx.Observable.prototype.flatMap(collectionSelector: (T => Promise<U>));
Rx.Observable.prototype.flatMap(collectionSelector: (T => Promise<U>), resultSelector: ((T, U, Int) => Z));

// With Arrays
Rx.Observable.prototype.flatMap(collection: Array<T>)
Rx.Observable.prototype.flatMap(collectionSelector: (T => Array<U>));
Rx.Observable.prototype.flatMap(collectionSelector: (T => Array<U>), resultSelector: ((T, U, Int) => Z));

// With Iterables
Rx.Observable.prototype.flatMap(collection: Iterable<T>)
Rx.Observable.prototype.flatMap(collectionSelector: (T => Iterable<U>));
Rx.Observable.prototype.flatMap(collectionSelector: (T => Iterable<U>), resultSelector: ((T, U, Int) => Z));
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx)