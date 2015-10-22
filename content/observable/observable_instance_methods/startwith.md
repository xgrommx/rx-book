## [`Rx.Observable.prototype.startWith([scheduler] ...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/startwith.js)

{% if book.isPdf %}

![startWith](http://reactivex.io/documentation/operators/images/startWith.png)

{% else %}

<rx-marbles key="startWith"></rx-marbles>

{% endif %}

Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.

#### Arguments
1. `[scheduler]` *(`Scheduler`)*: Scheduler to execute the function.
2. `args` *(arguments)*: Values to prepend to the observable sequence.

#### Returns
*(`Observable`)*: The source sequence prepended with the specified values.

#### Example

[](http://jsbin.com/beqot/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/startwith.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/startwith.js)

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
- [`/tests/observable/startwith.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/startwith.js)

{% endif %}