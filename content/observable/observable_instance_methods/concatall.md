## [`Rx.Observable.prototype.concatAll()`, `Rx.Observable.prototype.concatObservable()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/concatall.js)

{% if book.isPdf %}

![concatAll](http://reactivex.io/documentation/operators/images/concatAll.png)

{% else %}



{% endif %}

Concatenates a sequence of observable sequences into a single observable sequence.

#### Returns
*(`Observable`)*: The observable sequence that merges the elements of the inner sequences. 
 
#### Example

[](http://jsbin.com/rigut/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

File:
- [/src/core/observable/concatobservable.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observable/concatobservable.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.compat.js)
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Complete`](http://www.nuget.org/packages/RxJS-Complete/)
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [/tests/observable/concatobservable.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/concatobservable.js)

{% endif %}