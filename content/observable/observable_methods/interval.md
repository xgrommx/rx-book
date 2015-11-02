## [`Rx.Observable.interval(period, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/interval.js)

{% if book.isPdf %}

![interval](http://reactivex.io/documentation/operators/images/interval.png)

{% else %}



{% endif %}

Returns an observable sequence that produces a value after each period.

#### Arguments
1. `period` *(`Number`)*: Period for producing the values in the resulting sequence (specified as an integer denoting milliseconds).
2. `[scheduler]` *(Scheduler=Rx.Scheduler.timeout)*: Scheduler to run the timer on. If not specified, Rx.Scheduler.timeout is used.

#### Returns
*(`Observable`)*: An observable sequence that produces a value after each period.

#### Example

[](http://jsbin.com/lozay/1/embed?js,console)
