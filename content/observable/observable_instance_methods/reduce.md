## [`Rx.Observable.prototype.reduce(accumulator, [seed])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/reduce.js)

{% if book.isPdf %}

![reduce](http://reactivex.io/documentation/operators/images/reduce.png)

{% else %}

<rx-marbles key="reduce"></rx-marbles>

{% endif %}

Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.

For aggregation behavior with incremental intermediate results, see the `scan` method.

#### Arguments
1. `accumulator` *(`Function`)*:  An accumulator function to be invoked on each element.
2. `[seed]` *(`Any`)*: The initial accumulator value.
 
#### Returns
*(`Observable`)*: An observable sequence containing a single element with the final accumulator value.

#### Example

[](http://jsbin.com/jocin/1/embed?js,console)
