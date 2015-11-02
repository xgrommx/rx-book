## [`Rx.Observable.prototype.scan([seed], accumulator)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/scan.js)

{% if book.isPdf %}

![scan](http://reactivex.io/documentation/operators/images/scan.png)

{% else %}

<rx-marbles key="scan"></rx-marbles>

{% endif %}

Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.

For aggregation behavior with no intermediate results, see `Rx.Observable.aggregate`.

#### Arguments
1. `[seed]` *(`Any`)*: The initial accumulator value.
2. `accumulator` *(`Function`)*: An accumulator function to be invoked on each element.
 
#### Returns
*(`Observable`)*: An observable sequence which results from the comonadic bind operation.

#### Example

##### Without a seed

[](http://jsbin.com/jupibi/1/embed?js,console)

##### With a seed

[](http://jsbin.com/retuh/1/embed?js,console)
