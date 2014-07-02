# skipLastWithTime

`Rx.Observable.prototype.skipLastWithTime(duration)`
<a href="#rxobservableprototypeskiplastwithtimeduration">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/skiplastwithtime.js "View in source") 

Bypasses a specified number of elements at the end of an observable sequence.

This operator accumulates a queue with a length enough to store the first `count` elements. As more elements are received, elements are taken from the front of the queue and produced on the result sequence. This causes elements to be delayed. 

#### Arguments
1. `duration` *(`Number`)*: Duration for skipping elements from the end of the sequence.
1. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the timer on. If not specified, defaults to timeout scheduler.

#### Returns
*(`Observable`)*: An observable sequence with the elements skipped during the specified duration from the end of the source sequence.
 
#### Example
```js
var source = Rx.Observable.timer(0, 1000)
    .take(10)
    .skipLastWithTime(5000);
    
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

// => Next: 0
// => Next: 1
// => Next: 3
// => Next: 4
// => Completed 
```

### Location

File:
- [`/src/core/observable/skiplastwithtime.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/skiplastwithtime.js)

Dist:
- [`rx.time.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using `rx.time.js`
    - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Time`](http://www.nuget.org/packages/RxJS-Time/)

Unit Tests:
- [`/tests/observable/skiplastwithtime.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/skiplastwithtime.js)