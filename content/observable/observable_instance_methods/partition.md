## [`Rx.Observable.prototype.partition(predicate, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/partition.js)

Returns two observables which partition the observations of the source by the given function.  The first will trigger observations for those values for which the predicate returns true. The second will trigger observations for those values where the predicate returns false. The predicate is executed once for each subscribed observer. Both also propagate all error observations arising from the source and each completes when the source completes.

#### Arguments
1. `predicate` *(`Function`)*: Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.

#### Returns
*(`Array`)*:  An array of observables. The first triggers when the predicate returns true, and the second triggers when the predicate returns false.

#### Example

[](http://jsbin.com/kezoye/1/embed?js,output)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/linq/observable/partition.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/partition.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.compat.js)
- [`rx.coincidence.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.coincidence.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-All`](http://www.nuget.org/packages/RxJS-All/)
- [`RxJS-Coincidence`](http://www.nuget.org/packages/RxJS-Coincidence/)

Unit Tests:
- [`/tests/observable/partition.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/partition.js)

{% endif %}
