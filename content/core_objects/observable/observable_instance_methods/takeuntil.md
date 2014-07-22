# takeUntil

`Rx.Observable.prototype.takeUntil(other)`
<a href="#rxobservableprototypetakeuntilother">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/takeuntil.js "View in source") 

Returns the values from the source observable sequence until the other observable sequence or Promise produces a value.

#### Arguments
1. `other` *(`Observable` | `Promise`)*: Observable sequence or Promise that terminates propagation of elements of the source sequence.

#### Returns
*(`Observable`)*: An observable sequence containing the elements of the source sequence up to the point the other sequence or Promise interrupted further propagation.    

#### Example

[](http://jsbin.com/zahor/1/embed?js,console)

### Location

File:
- [`/src/core/observable/takeuntil.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/takeuntil.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/takeuntil.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/takeuntil.js)