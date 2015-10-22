## [`Rx.Observable.zip(...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/zip.js)

{% if book.isPdf %}

![zip](http://reactivex.io/documentation/operators/images/zip.png)

{% else %}



{% endif %}

Merges the specified observable sequences or Promises into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.

#### Arguments
1. `args` *(Array|arguments)*: Observable sources.

#### Returns
*(`Observable`)*: An observable sequence containing the result of combining elements of the sources using the specified result selector function.

#### Example

##### Using arguments

[](http://jsbin.com/jaliqo/1/embed?js,console)

##### Using promises and Observables */

[](http://jsbin.com/tuset/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/zip.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/zip.js)

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
- [/tests/observable/zip.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/zip.js)

{% endif %}