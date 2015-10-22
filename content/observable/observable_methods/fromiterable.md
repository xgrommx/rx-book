## [`Rx.Observable.fromIterable(iterable, [scheduler])`]()

Converts an ES6 iterable into an Observable sequence.

#### Arguments
1. `iterable` *(Iterable)*: Either a generator function or iterable such as Set, Map, etc.
2. `[scheduler=Rx.Scheduler.currentThread]` *(`Scheduler`)*: Scheduler to run the function on. If not specified, defaults to `Rx.Scheduler.currentThread`.

#### Returns
*(`Function`)*: The observable sequence whose elements are pulled from the given generator sequence.

#### Example
```js
// Using a Set
var source = Rx.Observable.fromIterable(new Set([1,2,3]));

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

// => Next: 1
// => Next: 2
// => Next: 3
// => Completed

// Using a generator function
var source = Rx.Observable.fromIterable(function* () { yield 42; });

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

// => Next: 42
// => Completed
```

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/fromiterable.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/fromiterable.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [/tests/observable/fromiterable.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/fromiterable.js)

{% endif %}