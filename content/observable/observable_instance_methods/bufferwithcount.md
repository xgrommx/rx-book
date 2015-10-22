## [`Rx.Observable.prototype.bufferWithCount(count, [skip])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/bufferwithcount.js)

{% if book.isPdf %}

![bufferWithCount](http://reactivex.io/documentation/operators/images/bufferWithCount3.png)

{% else %}



{% endif %}

Projects each element of an observable sequence into zero or more buffers which are produced based on element count information.

#### Arguments
1. `count` *(`Function`)*: Length of each buffer.
2. `[skip]` *(`Function`)*: Number of elements to skip between creation of consecutive buffers. If not provided, defaults to the count.

#### Returns
*(`Observable`)*: An observable sequence of buffers. 

#### Example

##### Without a skip

[](http://jsbin.com/behad/1/embed?js,console)

##### Using a skip

[](http://jsbin.com/vewabo/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/linq/observable/bufferwithcount.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/bufferwithcount.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.compat.js)
- [`rx.lite.extras.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.extras.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-All`](http://www.nuget.org/packages/RxJS-All/)
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/bufferwithcount.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/bufferwithcount.js)

{% endif %}