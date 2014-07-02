# buffer

`Rx.Observable.prototype.buffer([bufferOpenings], [bufferBoundaries], [bufferClosingSelector])`
<a href="#rxobservableprototypebufferbufferopenings-bufferboundaries-bufferclosingselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.coincidence.js#L572-L585 "View in source") 

Projects each element of an observable sequence into zero or more buffers.

```js
// With buffer closing selector
Rx.Observable.prototype.buffer(bufferClosingSelector);

// With buffer opening and window closing selector
Rx.Observable.prototype.buffer(bufferOpenings, bufferClosingSelector);

// With buffer boundaries
Rx.Observable.prototype.buffer(bufferBoundaries);
```

#### Arguments
1. `[bufferOpenings]` *(`Observable`)*: Observable sequence whose elements denote the creation of new windows.
2. `[bufferBoundaries] *(`Observable`)*: Sequence of buffer boundary markers. The current buffer is closed and a new buffer is opened upon receiving a boundary marker.
2. `[bufferClosingSelector]` *(`Function`)*: A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.

#### Returns
*(`Observable`)*: An observable sequence of windows. 

#### Example
```js
/* Using buffer boundaries */
var openings = Rx.Observable.interval(500);

var source = Rx.Observable.interval(100)
    .buffer(openings)
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

/* Using a buffer closing selector */
var win = 0;

var source = Rx.Observable.interval(50)
    .buffer(function () { return Rx.Observable.timer((win++) * 100); })
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

// => Next: 0 
// => Next: 1,2,3,4
// => Next: 5,6,7,8,9,10 
// => Completed 

/* Using Openings and Closing Selector */
var openings = Rx.Observable.interval(200);

var source = Rx.Observable.interval(50)
    .buffer(openings, function (x) { return Rx.Observable.timer(x + 100); })
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

// => Next: 3,4 
// => Next: 7,8 
// => Next: 11,12 
// => Completed 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx).coincidence.js