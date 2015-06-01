# pairwise

`Rx.Observable.prototype.pairwise()`
[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/pairwise.js "View in source")

Triggers on the second and subsequent triggerings of the input observable. The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.

#### Returns
*(`Observable`)*: An observable that triggers on successive pairs of observations from the input observable as an array.

#### Example

[](http://jsbin.com/yovebu/1/embed?js,console)

### Location

File:
- [`/src/core/linq/observable/pairwise.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/pairwise.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.compat.js)
- [`rx.coincidence.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.coincidence.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-All`](http://www.nuget.org/packages/RxJS-All/)
- [`RxJS-Coincidence`](http://www.nuget.org/packages/RxJS-Coincidence/)

Unit Tests:
- [`/tests/observable/pairwise.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/pairwise.js)
