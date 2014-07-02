# delay

`Rx.Observable.prototype.delay(dueTime, [scheduler])`
<a href="#rxobservableprototypedelayduetime-scheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L4111-L4128 "View in source") 

Time shifts the observable sequence by dueTime. The relative time intervals between the values are preserved.

#### Arguments
1. `dueTime` *(Date | Number)*: Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
2. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: Time-shifted sequence.
  
#### Example
```js
/* Using an absolute time to delay by a second */
var source = Rx.Observable.range(0, 3)
    .delay(new Date(Date.now() + 1000));
    
var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

// => Next: 0 
// => Next: 1 
// => Next: 2 
// => Completed

/* Using an relatove time to delay by a second */
var source = Rx.Observable.range(0, 3)
    .delay(1000);
    
var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

// => Next: false
// => Completed 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx).time.js