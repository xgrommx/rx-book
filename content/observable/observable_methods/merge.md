## [`Rx.Observable.merge([scheduler], ...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/merge.js)

{% if book.isPdf %}

![merge](http://reactivex.io/documentation/operators/images/merge.png)

{% else %}



{% endif %}

Merges all the observable sequences and Promises into a single observable sequence.  

#### Arguments
1. `[scheduler]` *(Scheduler=Rx.Scheduler.timeout)*: Scheduler to run the timer on. If not specified, Rx.Scheduler.immediate is used.
1. `args` *(Array|arguments)*: Observable sequences to merge into a single sequence.

#### Returns
*(`Observable`)*: An observable sequence that produces a value after each period.

#### Example

[](http://jsbin.com/yicit/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/merge.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/merge.js)

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
- [/tests/observable/merge.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/merge.js)

{% endif %}