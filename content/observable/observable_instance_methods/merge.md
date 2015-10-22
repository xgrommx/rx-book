## [`Rx.Observable.prototype.merge(maxConcurrent | other)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/mergeproto.js)

{% if book.isPdf %}

![merge](http://reactivex.io/documentation/operators/images/merge.png)

{% else %}

<rx-marbles key="merge"></rx-marbles>

{% endif %}

Merges an observable sequence of observable sequences into an observable sequence, limiting the number of concurrent subscriptions to inner sequences.
Or merges two observable sequences into a single observable sequence.

#### Arguments
1. `maxConcurrent` *(`Function`)*: Maximum number of inner observable sequences being subscribed to concurrently.
1. `other` *(`Observable`)*:  The second observable sequence to merge into the first.
 
#### Returns
*(`Observable`)*: The observable sequence that merges the elements of the inner sequences. 
 
#### Example

#### Merge two sequences

[](http://jsbin.com/pukeb/1/embed?js,console)

#### Use max concurrency

[](http://jsbin.com/tehod/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/mergeproto.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/mergeproto.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/mergeproto.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/mergeproto.js)

{% endif %}