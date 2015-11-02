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
