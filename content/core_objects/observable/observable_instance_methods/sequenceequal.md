# sequenceEqual

`Rx.Observable.prototype.sequenceEqual(second, [comparer])`
<a href="#rxobservableprototypesequenceequalsecond-comparer">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/sequenceequal.js "View in source") 

Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.

#### Arguments
1. `second` *(`Observable` | `Promise` | `Array`)*:  Second observable sequence, Promise or array to compare.
2. `[comparer]` *(`Function`)*: Comparer used to compare elements of both sequences.
 
#### Returns
*(`Observable`)*: An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.   

#### Example

[](http://jsbin.com/feyos/1/embed?js,console)

### Location

File:
- [`/src/core/observable/sequenceequal.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/sequenceequal.js)

Dist:
- [`rx.aggregates.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Aggregates`](http://www.nuget.org/packages/RxJS-Aggregates/)

Unit Tests:
- [`/tests/observable/sequenceequal.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/sequenceequal.js)