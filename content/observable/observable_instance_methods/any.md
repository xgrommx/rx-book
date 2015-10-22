## [`Rx.Observable.prototype.any([predicate], [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/some.js)

{% if book.isPdf %}

![any](http://reactivex.io/documentation/operators/images/contains.png)

{% else %}

<rx-marbles key="some"></rx-marbles>

{% endif %}

Determines whether any element of an observable sequence satisfies a condition if present, else if any items are in the sequence. There is an alias to this function called `some`.

#### Arguments
1. `[predicate]` *(`Function`)*: A function to test each element for a condition.
2. `[thisArg]` *(`Any`)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether one of the elements in the source sequence pass the test in the specified predicate.

#### Example

##### Without a predicate

[](http://jsbin.com/xifup/1/embed?js,console)

##### With a predicate

[](http://jsbin.com/qaney/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/linq/observable/some.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/some.js)

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
- [`/tests/observable/some.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/some.js)

{% endif %}