## [`Rx.Observable.prototype.average([selector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/average.js)

{% if book.isPdf %}

![average](http://reactivex.io/documentation/operators/images/average.png)

{% else %}

<rx-marbles key="average"></rx-marbles>

{% endif %}

Computes the average of an observable sequence of values that are in the sequence or obtained by invoking a transform function on each element of the input sequence if present.

#### Arguments
1. `[selector]` *(`Function`)*: A transform function to apply to each element.
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing `selector`.

#### Returns
*(`Observable`)*: An observable sequence containing a single element with the average of the sequence of values.

#### Example

##### Without a selector

[](http://jsbin.com/larut/1/embed?js,console)

##### With a selector

[](http://jsbin.com/zenif/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/linq/observable/average.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/average.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [rx.aggregates.js](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.aggregates.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-All`](http://www.nuget.org/packages/RxJS-All/)
- [`RxJS-Aggregates`](http://www.nuget.org/packages/RxJS-Aggregates/)

Unit Tests:
- [`/tests/observable/average.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/average.js)

{% endif %}