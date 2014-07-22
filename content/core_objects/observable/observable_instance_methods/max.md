# max

`Rx.Observable.prototype.max([comparer])`
<a href="#rxobservableprototypemaxcomparer">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/max.js "View in source") 

Returns the maximum value in an observable sequence according to the specified comparer.

#### Arguments
1. `[comparer]` *(`Function`)*:  Comparer used to compare elements.
 
#### Returns
*(`Observable`)*: An observable sequence containing a single element with the maximum element in the source sequence.

#### Example

##### Without comparer

[](http://jsbin.com/zages/1/embed?js,console)

##### With a comparer

[](http://jsbin.com/kejay/1/embed?js,console)

### Location

File:
- [`/src/core/observable/max.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/max.js)

Dist:
- [`rx.aggregates.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js)

Prerequisites:
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Aggregates`](http://www.nuget.org/packages/RxJS-Aggregates/)

Unit Tests:
- [`/tests/observable/max.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/max.js)