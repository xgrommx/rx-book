# observeOn

`Rx.Observable.prototype.observeOn(scheduler)`
<a href="#rxobservableprototypeobserveonscheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/return.js "View in source") 

Wraps the source sequence in order to run its observer callbacks on the specified scheduler.

This only invokes observer callbacks on a scheduler. In case the subscription and/or unsubscription actions have side-effects that require to be run on a scheduler, use subscribeOn.

#### Arguments
1. `scheduler` *(`Scheduler`)*:  Scheduler to notify observers on.

#### Returns
*(`Observable`)*: The source sequence whose observations happen on the specified scheduler. 
 
#### Example
```js
/* Change from immediate scheduler to timeout */
var source = Rx.Observable.return(42, Rx.Scheduler.immediate)
    .observeOn(Rx.Scheduler.timeout);

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

### Location

File:
- [`/src/core/observable/return.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/return.js)

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
- [`/tests/observable/return.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/return.js)