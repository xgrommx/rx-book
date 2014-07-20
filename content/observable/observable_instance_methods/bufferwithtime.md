# bufferWithTime

`Rx.Observable.prototype.bufferWithTime(timeSpan, [timeShift | scheduler], [scheduler])`
<a href="#rxobservableprototypebufferwithtimetimespan-timeshift--scheduler-scheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js#L483-L498 "View in source") 

Projects each element of an observable sequence into zero or more buffers which are produced based on timing information.

#### Arguments
1. `timeSpan` *(`Number`)*: Length of each buffer (specified as an integer denoting milliseconds).
2. `[timeShift]` *(`Number`)*: Interval between creation of consecutive buffers (specified as an integer denoting milliseconds).
3. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence of buffers. 

#### Example

##### Without a skip

[](http://jsbin.com/zokej/1/embed?js,console)

##### Using a skip

[](http://jsbin.com/rafay/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).time.js