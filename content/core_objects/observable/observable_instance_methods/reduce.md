# reduce

<rx-marbles key="reduce"></rx-marbles>

`Rx.Observable.prototype.reduce(accumulator, [seed])`
<a href="#rxobservableprototypereduceaccumulator-seed">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/reduce.js "View in source") 

Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.

For aggregation behavior with incremental intermediate results, see the `scan` method.

#### Arguments
1. `accumulator` *(`Function`)*:  An accumulator function to be invoked on each element.
2. `[seed]` *(`Any`)*: The initial accumulator value.
 
#### Returns
*(`Observable`)*: An observable sequence containing a single element with the final accumulator value.

#### Example

[](http://jsbin.com/jocin/1/embed?js,console)

### Location

File:
- [`/src/core/observable/reduce.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/reduce.js)

Dist:
- [`rx.aggregates.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Aggregates`](http://www.nuget.org/packages/RxJS-Aggregates/)

Unit Tests:
- [`/tests/observable/reduce.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/reduce.js)