## [`Rx.Observable.zipArray(...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/ziparray.js)

{% if book.isPdf %}

![zipArray](http://reactivex.io/documentation/operators/images/zipArray.png)

{% else %}



{% endif %}

Merges the specified observable sequences into one observable sequence by emitting a list with the elements of the observable sequences at corresponding indexes.

#### Arguments
1. `args` *(Arguments | Array)*: Observable sources.

#### Returns
*(`Observable`)*: An observable sequence containing lists of elements at corresponding indexes.

#### Example

[](http://jsbin.com/luhuxo/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/zip.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/ziparay.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- [`rx`](https://www.npmjs.org/package/rx).experimental.js
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [/tests/observable/ziparay.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/ziparay.js)

{% endif %}