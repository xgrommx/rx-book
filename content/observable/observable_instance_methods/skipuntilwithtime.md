## [`Rx.Observable.prototype.skipUntilWithTime(startTime, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/skipuntilwithtime.js)

{% if book.isPdf %}

![skipUntilWithTime](http://reactivex.io/documentation/operators/images/skipUntilWithTime.png)

{% else %}



{% endif %}

Skips elements from the observable source sequence until the specified start time, using the specified scheduler to run timers.

Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the start time.

#### Arguments
1. `startTime` *(`Date` | `Number`)*: Time to start taking elements from the source sequence. If this value is less than or equal to current time, no elements will be skipped.
2. [`scheduler = Rx.Scheduler.timeout`] *(`Scheduler`)*: Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.

#### Returns
*(`Observable`)*: An observable sequence with the elements skipped until the specified start time.   

#### Example

[](http://jsbin.com/bifef/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/skipuntilwithtime.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/skipuntilwithtime.js)

Dist:
- [`rx.time.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using `rx.time.js`
  - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Time/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/skipuntilwithtime.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/skipuntilwithtime.js)

{% endif %}