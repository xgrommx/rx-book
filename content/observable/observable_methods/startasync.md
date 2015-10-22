## [`Rx.Observable.startAsync(functionAsync)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/startasync.js)

{% if book.isPdf %}

![startAsync](http://reactivex.io/documentation/operators/images/startAsync.png)

{% else %}



{% endif %}

Invokes the asynchronous function, surfacing the result through an observable sequence.

### Arguments
1. `functionAsync` *(`Function`)*: Asynchronous function which returns a Promise to run.

#### Returns
*(`Observable`)*: An observable sequence exposing the function's Promises's value or error.

#### Example

[](http://jsbin.com/jucoh/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/startasync.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/startasync.js)

Dist:
- [`rx.async.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.async.js)
- [`rx.async.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.async.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using rx.async.js | rx.async.compat.js
    - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
    - [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Async`](http://www.nuget.org/packages/RxJS-Async)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [/tests/observable/startasync.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/startasync.js)

{% endif %}