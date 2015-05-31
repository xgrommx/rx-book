# min

<rx-marbles key="min"></rx-marbles>

`Rx.Observable.prototype.min([comparer])`
<a href="#rxobservableprototypemincomparer">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/min.js "View in source") 

Returns the minimum element in an observable sequence according to the optional comparer else a default greater than less than check.

#### Arguments
1. `[comparer]` *(`Function`)*:  Comparer used to compare elements.
 
#### Returns
*(`Observable`)*: An observable sequence containing a single element with the minimum element in the source sequence.
 
#### Example

##### Without comparer

[](http://jsbin.com/gerap/1/embed?js,console)

#### With a comparer

[](http://jsbin.com/cayun/1/embed?js,console)

### Location

File:
- [`/src/core/observable/min.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/min.js)

Dist:
- [`rx.aggregates.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js)

Prerequisites:
- If using [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)
  - [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Aggregates`](http://www.nuget.org/packages/RxJS-Aggregates/)

Unit Tests:
- [`/tests/observable/min.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/min.js)