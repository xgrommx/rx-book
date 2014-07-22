# defer
`Rx.Observable.defer(observableFactory)`
<a href="#rxobservabledeferobservablefactory">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/defer.js "View in source")

Returns an observable sequence that invokes the specified factory function whenever a new observer subscribes.

![defer](https://github.com/Netflix/RxJava/wiki/images/rx-operators/defer.png)

#### Arguments
1. `observableFactory` *(`Function`)*: Observable factory function to invoke for each observer that subscribes to the resulting sequence.

#### Returns
*(`Observable`)*: An observable sequence whose observers trigger an invocation of the given observable factory function.

#### Example

##### Using an observable sequence

[](http://jsbin.com/vigitu/1/embed?js,console)

##### Using a promise

[](http://jsbin.com/memuf/1/embed?js,console)

### Location

File:
- [`/src/core/observable/defer.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/defer.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.all.compat.js)
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Complete`](http://www.nuget.org/packages/RxJS-Complete)
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/defer.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/defer.js)

