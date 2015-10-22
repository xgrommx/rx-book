## [`Rx.Observable.prototype.pausableBuffered(pauser)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/backpressure/pausablebuffered.js)

{% if book.isPdf %}

![pausableBuffered](http://reactivex.io/documentation/operators/images/bp.pausableBuffered.png)

{% else %}

<rx-marbles key="pausableBuffered"></rx-marbles>

{% endif %}

Pauses the underlying observable sequence based upon the observable sequence which yields true/false, and yields the values that were buffered while paused. Note that this only works on hot observables.

#### Arguments
1. `pauser` *(Rx.Subject)*: The observable sequence used to pause the underlying sequence.

#### Returns
*(`Observable`)*: The observable sequence which is paused based upon the pauser.

#### Example

[](http://jsbin.com/nekey/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/backpressure/pausablebuffered.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/backpressure/pausablebuffered.js)

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
- [/tests/observable/pausablebuffered.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/pausablebuffered.js)

{% endif %}