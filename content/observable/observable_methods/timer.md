## [`Rx.Observable.timer(dueTime, [period], [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/timer.js)

{% if book.isPdf %}

![timer](http://reactivex.io/documentation/operators/images/timer.png)

{% else %}



{% endif %}

Returns an observable sequence that produces a value after dueTime has elapsed and then after each period.  Note for `rx.lite.js`, only 
relative time is supported.

### Arguments
1. `dueTime` *(Date|Number)*: Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
2. `[period|scheduler=Rx.Scheduler.timeout]` *(Number|Scheduler)*: Period to produce subsequent values (specified as an integer denoting milliseconds), or the scheduler to run the timer on. If not specified, the resulting timer is not recurring.
3. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the timer on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence that produces a value after due time has elapsed and then each period.

#### Example

[](http://jsbin.com/hezadu/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/timer.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/timer.js)
- [/src/core/observable/timer-lite.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/timer-lite.js)

Dist:
- [rx.time.js](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- [`rx`](https://www.npmjs.org/package/rx).time.js
    - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx`](https://www.npmjs.org/package/rx).lite.js | rx.lite.compat.js

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`rx`](https://www.npmjs.org/package/rx)JS-Time
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [/tests/observable/timer.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/timer.js)
- [/tests/observable/timer-lite.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/timer-lite.js)

{% endif %}