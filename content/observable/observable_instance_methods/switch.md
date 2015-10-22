## [`Rx.Observable.prototype.switch()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/switch.js)

{% if book.isPdf %}

![switch](http://reactivex.io/documentation/operators/images/switch.png)

{% else %}



{% endif %}

Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.  There is an alias for this method called `switchLatest` for browsers <IE9.
  
#### Returns
*(`Observable`)*: The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.  
 
#### Example

[](http://jsbin.com/gojar/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/switchlatest.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/switchlatest.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/switchlatest.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/switchlatest.js)

{% endif %}