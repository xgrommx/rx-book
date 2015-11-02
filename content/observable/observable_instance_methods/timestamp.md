## [`Rx.Observable.prototype.timestamp([scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/timestamp.js)

{% if book.isPdf %}

![timestamp](http://reactivex.io/documentation/operators/images/timestamp.png)

{% else %}



{% endif %}

Records the timestamp for each value in an observable sequence.

#### Arguments
1. `[scheduler=Rx.Observable.timeout]` *(`Scheduler`)*: Scheduler used to compute timestamps. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence with timestamp information on values.

#### Example

[](http://jsbin.com/kadup/1/embed?js,console)
