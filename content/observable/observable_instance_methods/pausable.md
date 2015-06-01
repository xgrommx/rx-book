# pausable

<rx-marbles key="pausable"></rx-marbles>

`Rx.Observable.prototype.pausable(pauser)`
<a href="#rxobservableprototypepausablepauser">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/backpressure/pausable.js "View in source") 

Pauses the underlying observable sequence based upon the observable sequence which yields true/false.  Note that this only works on hot observables.

#### Arguments
1. `pauser` *(Rx.Subject)*: The observable sequence used to pause the underlying sequence.

#### Returns
*(`Observable`)*: The observable sequence which is paused based upon the pauser.

#### Example

[](http://jsbin.com/cicema/1/embed?js,console)

### Location

File:
- [/src/core/backpressure/pausable.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/backpressure/pausable.js)

Dist:
- [rx.backpressure.js](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.backpressure.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using `rx.backpressure.js`
    - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
    - [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-BackPressure`](http://www.nuget.org/packages/RxJS-BackPressure/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [/tests/observable/pausable.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/pausable.js)