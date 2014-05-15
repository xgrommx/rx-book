
<iframe src="examples/1.html" frameborder="0"></iframe>

`Rx.Observable.amb(...args)`
<a href="#rxobservableambargs">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/amb.js "View in source")

Propagates the observable sequence or Promise that reacts first.

![amb](https://github.com/Netflix/RxJava/wiki/images/rx-operators/amb.png)

#### Arguments
1. `args` *(Array|arguments)*: Observable sources or Promises competing to react first either as an array or arguments.

#### Returns
*(`Observable`)*: An observable sequence that surfaces any of the given sequences, whichever reacted first.

#### Example
```js
/* Using Observable sequences */
var source = Rx.Observable.amb(
    Rx.Observable.timer(500).select(function () { return 'foo'; }),
    Rx.Observable.timer(200).select(function () { return 'bar'; })
);

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

// => Next: bar
// => Completed

/* Using Promises and Observables */
var source = Rx.Observable.amb(
    RSVP.Promise.resolve('foo')
    Rx.Observable.timer(200).select(function () { return 'bar'; })
);

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

// => Next: foo
// => Completed
```

### Location

File:
- [`/src/core/observable/amb.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/amb.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)

Unit Tests:
- [`/tests/observable/ambproto.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/ambproto.js)