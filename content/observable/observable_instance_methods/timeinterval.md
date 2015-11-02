## [`Rx.Observable.prototype.timeInterval([scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/timeinterval.js)

{% if book.isPdf %}

![timeInterval](http://reactivex.io/documentation/operators/images/timeInterval.png)

{% else %}



{% endif %}

Records the time interval between consecutive values in an observable sequence.

#### Arguments
1. `[scheduler=Rx.Observable.timeout]` *(`Scheduler`)*: Scheduler used to compute time intervals. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence with time interval information on values.

#### Example

[](http://jsbin.com/ragoq/1/embed?js,console)
