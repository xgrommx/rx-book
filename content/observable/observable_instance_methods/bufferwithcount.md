# bufferWithCount

`Rx.Observable.prototype.bufferWithCount(count, [skip])`
<a href="#rxobservableprototypebufferwithcountcount-skip">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L3694-L3703 "View in source") 

Projects each element of an observable sequence into zero or more buffers which are produced based on element count information.

#### Arguments
1. `count` *(`Function`)*: Length of each buffer.
2. `[skip]` *(`Function`)*: Number of elements to skip between creation of consecutive buffers. If not provided, defaults to the count.

#### Returns
*(`Observable`)*: An observable sequence of buffers. 

#### Example
```js
/* Without a skip */
var source = Rx.Observable.range(1, 6)
    .bufferWithCount(2);

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

// => Next: 1,2 
// => Next: 3,4 
// => Next: 5,6 
// => Completed 

/* Using a skip */
var source = Rx.Observable.range(1, 6)
    .bufferWithCount(2, 1);

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

// => Next: 1,2 
// => Next: 2,3 
// => Next: 3,4 
// => Next: 4,5 
// => Next: 5,6 
// => Next: 6 
// => Completed 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx)