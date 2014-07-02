# timeInterval

`Rx.Observable.prototype.timeInterval([scheduler])`
<a href="#rxobservableprototypetimeintervalscheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/timeinterval.js "View in source") 

Records the time interval between consecutive values in an observable sequence.

#### Arguments
1. `[scheduler=Rx.Observable.timeout]` *(`Scheduler`)*: Scheduler used to compute time intervals. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence with time interval information on values.

#### Example
```js
var source = Rx.Observable.timer(0, 1000)
    .timeInterval()
    .map(function (x) { return x.value + ':' + x.interval; })
    .take(5);
    
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

// => Next: 0:0
// => Next: 1:1000
// => Next: 2:1000
// => Next: 3:1000
// => Next: 4:1000
// => Completed    
```

### Location

File:
- [`/src/core/observable/timeinterval.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/timeinterval.js)

Dist:
- [`rx.time.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Time`](http://www.nuget.org/packages/RxJS-Time/)

Unit Tests:
- [`/tests/observable/timeinterval.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/timeinterval.js)