# maxBy

`Rx.Observable.prototype.maxBy(keySelector, [comparer])`
<a href="#rxobservableprototypemaxbykeyselector-comparer">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/maxby.js "View in source") 

Returns the maximum value in an observable sequence according to the specified comparer.

#### Arguments
1. `keySelector` *(`Function`)*: Key selector function.
2. `[comparer]` *(`Function`)*:  Comparer used to compare elements.
 
#### Returns
*(`Observable`)*: An observable sequence containing a list of zero or more elements that have a maximum key value.
 
#### Example

[](http://jsbin.com/zupib/1/embed?js,console)

### Location

File:
- [`/src/core/observable/maxby.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/maxby.js)

Dist:
- [`rx.aggregates.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js)

Prerequisites:
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Aggregates`](http://www.nuget.org/packages/RxJS-Aggregates/)

Unit Tests:
- [`/tests/observable/maxby.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/maxby.js)