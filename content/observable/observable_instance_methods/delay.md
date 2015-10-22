## [`Rx.Observable.prototype.delay(dueTime, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/delay.js)

{% if book.isPdf %}

![delay](http://reactivex.io/documentation/operators/images/delay.png)

{% else %}

<rx-marbles key="delay"></rx-marbles>

{% endif %}

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

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).time.js

{% endif %}