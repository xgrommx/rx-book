## [`Rx.Observable.never()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/never.js)

{% if book.isPdf %}

![never](http://reactivex.io/documentation/operators/images/never.png)

{% else %}



{% endif %}

Returns a non-terminating observable sequence, which can be used to denote an infinite duration (e.g. when using reactive joins). 

#### Returns
*(`Observable`)*: An observable sequence whose observers will never get called.

#### Example

[](http://jsbin.com/nuyawe/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/never.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/never.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [/tests/observable/never.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/never.js)

{% endif %}