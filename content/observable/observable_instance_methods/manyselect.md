# manySelect

`Rx.Observable.prototype.manySelect(selector, [scheduler])`
<a href="#rxobservableprototypemanyselectselector-scheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js#L634-L639 "View in source") 

Comonadic bind operator.

#### Arguments
1. `selector` *(`Function`)*: A transform function to apply to each element.
2. `[scheduler=Rx.Scheduler.immediate]` *(`Scheduler`)*: Scheduler used to execute the operation. If not specified, defaults to the `Rx.Scheduler.immediate` scheduler.
 
#### Returns
*(`Observable`)*: An observable sequence which results from the comonadic bind operation.

#### Example

[](http://jsbin.com/yaxav/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).experimental.js