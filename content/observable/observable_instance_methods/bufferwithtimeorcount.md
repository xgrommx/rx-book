# bufferWithTimeOrCount

`Rx.Observable.prototype.bufferWithTimeOrCount(timeSpan, count, [scheduler])`
<a href="#rxobservableprototypebufferwithtimeorcounttimespan-count-scheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js#L513-L518 "View in source") 

Projects each element of an observable sequence into a buffer that is completed when either it's full or a given amount of time has elapsed.

#### Arguments
1. `timeSpan` *(`Number`)*: Maximum time length of a buffer.
2. `count` *(`Number`)*: Maximum element count of a buffer.
3. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence of buffers. 

#### Example
```js
/* Hitting the count buffer first */
var source = Rx.Observable.interval(100)
    .bufferWithTimeOrCount(500, 3)
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

// => Next: 0,1,2 
// => Next: 3,4,5 
// => Next: 6,7,8 
// => Completed 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx).time.js