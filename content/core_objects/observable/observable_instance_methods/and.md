# and

### `Rx.Observable.prototype.and(rightSource)`
[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/and.js "View in source")

Propagates the observable sequence that reacts first.

#### Arguments
1. `right` *(`Observable`)*: Observable sequence to match with the current sequence.

#### Returns
*(`Pattern`)*: Pattern object that matches when both observable sequences have an available value.

#### Example

[](http://jsbin.com/boyane/1/embed?js,console)

### Location

File:
- [/src/core/linq/observable/and.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/and.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.compat.js)
- [`rx.joinpatterns.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.joinpatterns.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-All`](http://www.nuget.org/packages/RxJS-All)
- [`RxJS-JoinPatterns`](http://www.nuget.org/packages/RxJS-JoinPatterns)

Unit Tests:
- [/tests/observable/when.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/when.js)