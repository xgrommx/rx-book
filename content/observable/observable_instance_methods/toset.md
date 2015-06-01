# toSet

`Rx.Observable.prototype.toSet()`
[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/toset.js "View in source")

Creates an observable sequence with a single item of a Set created from the observable sequence.  Note that this only works in an ES6 environment or polyfilled.

#### Returns
*(`Observable`)*: An observable sequence containing a single element with a Set containing all the elements of the source sequence.

#### Example

[](http://jsbin.com/biyaj/1/embed?js,console)

### Location

File:
- [`/src/core/linq/observable/toset.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/toset.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.compat.js)
- [`rx.aggregates.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.aggregates.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-All`](http://www.nuget.org/packages/RxJS-All/)
- [`RxJS-Aggregates`](http://www.nuget.org/packages/RxJS-Aggregates/)

Unit Tests:
- [`/tests/observable/toset.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/toset.js)
