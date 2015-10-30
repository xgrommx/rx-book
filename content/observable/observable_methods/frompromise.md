## [`Rx.Observable.fromPromise(promise)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/frompromise.js)

Converts a Promises/A+ spec compliant Promise and/or ES2015 compliant Promise to an Observable sequence.

#### Arguments
1. `promise` *(`Promise`)*: Promises/A+ spec compliant Promise to an Observable sequence.

#### Returns
*(`Observable`)*: An Observable sequence which wraps the existing promise success and failure.

#### Example

##### Create a promise which resolves 42

[](http://jsbin.com/riyar/1/embed?js,console)

##### Create a promise which rejects with an error

[](http://jsbin.com/zuyeyi/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/frompromise.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/frompromise.js)

Dist:
- [`rx.async.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.async.js)
- [`rx.async.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.async.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using rx.async.js | rx.async.compat.js
    - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
    - [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)
- [`rx`](https://www.npmjs.org/package/rx).lite.js | rx.lite.compat.js

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Async`](http://www.nuget.org/packages/RxJS-Async)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [/tests/observable/fromnodecallback.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/frompromise.js)

{% endif %}