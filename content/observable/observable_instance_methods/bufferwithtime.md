# bufferWithTime

`Rx.Observable.prototype.bufferWithTime(timeSpan, [timeShift | scheduler], [scheduler])`
<a href="#rxobservableprototypebufferwithtimetimespan-timeshift--scheduler-scheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js#L483-L498 "View in source") 

Projects each element of an observable sequence into zero or more buffers which are produced based on timing information.

#### Arguments
1. `timeSpan` *(`Number`)*: Length of each buffer (specified as an integer denoting milliseconds).
2. `[timeShift]` *(`Number`)*: Interval between creation of consecutive buffers (specified as an integer denoting milliseconds).
3. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence of buffers. 

#### Example
```js
/* Without a skip */
var source = Rx.Observable.interval(100)
    .bufferWithTime(500)
    .take(3);

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

// => Next: 0,1,2,3 
// => Next: 4,5,6,7,8 
// => Next: 9,10,11,12,13 
// => Completed 

/* Using a skip */
var source = Rx.Observable.interval(100)
    .bufferWithTime(500, 100)
    .take(3);

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

// => Next: 0,1,2,3,4 
// => Next: 0,1,2,3,4,5 
// => Next: 2,3,4,5,6 
// => Completed 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx).time.js