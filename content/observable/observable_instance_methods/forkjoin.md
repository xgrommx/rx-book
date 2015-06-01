# forkJoin

`Rx.Observable.prototype.forkJoin(second, resultSelector)`
<a href="#rxobservableprototypeforkjoinsecond-resultselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.experimental.js#L304-L373 "View in source") 

Runs two observable sequences in parallel and combines their last elements.

#### Arguments
1. `second` *(`Observable`)*: Second observable sequence.
2. `resultSelector` *(`Any`)*: The default value if no such element exists.  If not specified, defaults to null.

#### Returns
*(`Observable`)*: An observable sequence that contains elements from the input sequence that satisfy the condition.  

#### Example

[](http://jsbin.com/vezova/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).experimental.js