# delay

<rx-marbles key="delay"></rx-marbles>

`Rx.Observable.prototype.delay(dueTime, [scheduler])`
<a href="#rxobservableprototypedelayduetime-scheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L4111-L4128 "View in source") 

Time shifts the observable sequence by dueTime. The relative time intervals between the values are preserved.

#### Arguments
1. `dueTime` *(Date | Number)*: Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
2. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: Time-shifted sequence.
  
#### Example

##### Using an absolute time to delay by a second

[](http://jsbin.com/hulit/1/embed?js,console)

##### Using an relatove time to delay by a second

[](http://jsbin.com/haziv/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).time.js