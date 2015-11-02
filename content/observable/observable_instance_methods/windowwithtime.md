## [`Rx.Observable.prototype.windowWithTime(timeSpan, [timeShift | scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/windowwithtime.js)

{% if book.isPdf %}

![windowWithTime](http://reactivex.io/documentation/operators/images/windowWithTime5.png)

{% else %}



{% endif %}

Projects each element of an observable sequence into zero or more buffers which are produced based on timing information.

#### Arguments
1. `timeSpan` *(`Number`)*: Length of each buffer (specified as an integer denoting milliseconds).
2. `[timeShift]` *(`Number`)*: Interval between creation of consecutive buffers (specified as an integer denoting milliseconds).
3. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence of buffers. 

#### Example

##### Without a skip

[](http://jsbin.com/zuyuki/1/embed?js,console)

##### Using a skip

[](http://jsbin.com/wowin/1/embed?js,console)
