# controlled

`Rx.Observable.prototype.controlled([enableQueue])`
<a href="#rxobservableprototypecontrolledenablequeue">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/backpressure/controlled.js "View in source") 

Attaches a controller to the observable sequence with the ability to queue.

#### Arguments
1. `[enableQueue]` *(Boolean)*: Whether to enable queueing.  If not specified, defaults to true.

#### Returns
*(`Observable`)*: An observable sequence which can be used to request values from the sequence.

#### Example

[](http://jsbin.com/liraw/1/embed?js,console)

### Location

File:
- [/src/core/backpressure/controlled.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/backpressure/controlled.js)

Dist:
- [rx.backpressure.js](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.async.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using rx.backpressure.js
    - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
    - [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-BackPressure`](http://www.nuget.org/packages/RxJS-BackPressure/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [/tests/observable/controlled.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/controlled.js)