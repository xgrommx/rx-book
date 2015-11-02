## [`Rx.Observable.prototype.manySelect(selector, [scheduler])`, `Rx.Observable.prototype.extend(selector, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/manyselect.js)

{% if book.isPdf %}

![manySelect](http://reactivex.io/documentation/operators/images/manySelect.png)

{% else %}



{% endif %}

Comonadic bind operator.

#### Arguments
1. `selector` *(`Function`)*: A transform function to apply to each element.
2. `[scheduler=Rx.Scheduler.immediate]` *(`Scheduler`)*: Scheduler used to execute the operation. If not specified, defaults to the `Rx.Scheduler.immediate` scheduler.
 
#### Returns
*(`Observable`)*: An observable sequence which results from the comonadic bind operation.

#### Example

[](http://jsbin.com/yaxav/1/embed?js,console)
