## [`Rx.Observable.onErrorResumeNext(...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/onerrorresumenext.js)

{% if book.isPdf %}

![onErrorResumeNext](http://reactivex.io/documentation/operators/images/onErrorResumeNext.png)

{% else %}



{% endif %}

Continues an observable sequence that is terminated normally or by an exception with the next observable sequence or Promise.

### Arguments
1. `args` *(Array|arguments)*: Observable sequences to concatenate.

#### Returns
*(`Observable`)*: An observable sequence that concatenates the source sequences, even if a sequence terminates exceptionally. 

#### Example

[](http://jsbin.com/zewox/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/onerrorresumenext.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/onerrorresumenext.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)

Unit Tests:
- [/tests/observable/onerrorresumenext.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/onerrorresumenext.js)

{% endif %}