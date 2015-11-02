## [`Rx.Observable.prototype.takeLastWithTime(duration, [timeScheduler], [loopScheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/takelastwithtime.js)

{% if book.isPdf %}

![takeLastWithTime](http://reactivex.io/documentation/operators/images/takeLastWithTime.png)

{% else %}



{% endif %}

Returns elements within the specified duration from the end of the observable source sequence, using the specified schedulers to run timers and to drain the collected elements.

#### Arguments
1. `duration` *(`Number`)*: Duration for taking elements from the end of the sequence.
2. `[timeScheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the timer on. If not specified, defaults to timeout scheduler.
2. `[loopScheduler=Rx.Scheduler.currentThread]` *(`Scheduler`)*: Scheduler to drain the collected elements. If not specified, defaults to current thread scheduler.

#### Returns
*(`Observable`)*: An observable sequence with the elements taken during the specified duration from the end of the source sequence.
    
#### Example

[](http://jsbin.com/liwori/1/embed?js,console)
