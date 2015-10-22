## [`Rx.Observable.prototype.aggregate([seed], accumulator)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/aggregate.js)

{% if book.isPdf %}

![aggregate](http://reactivex.io/documentation/operators/images/aggregate.png)

{% else %}



{% endif %}

Use `Rx.Observable.prototype.reduce` instead.

Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.

For aggregation behavior with incremental intermediate results, see `Rx.Observable.prototype.scan`.

#### Arguments
1. `[seed]` *(Mixed)*: The initial accumulator value.
2. `accumulator` *(`Function`)*: accumulator An accumulator function to be invoked on each element.

#### Returns
*(`Observable`)*: An observable sequence containing a single element with the final accumulator value.

#### Example

##### Using a seed for the accumulate

[](http://jsbin.com/yukeh/1/embed?js,console)

##### Without a seed

[](http://jsbin.com/malif/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/linq/observable/aggregate.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/aggregate.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [`rx.aggregates.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.aggregates.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-All`](http://www.nuget.org/packages/RxJS-All/)
- [`RxJS-Aggregates`](http://www.nuget.org/packages/RxJS-Aggregates/)

Unit Tests:
- [`/tests/observable/aggregate.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/aggregate.js)

{% endif %}
