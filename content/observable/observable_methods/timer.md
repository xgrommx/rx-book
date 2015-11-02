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
