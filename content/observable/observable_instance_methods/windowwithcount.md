# windowWithCount

`Rx.Observable.prototype.windowWithCount(count, [skip])`
<a href="#rxobservableprototypewindowwithcountcount-skip">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/windowwithcount.js "View in source") 

Projects each element of an observable sequence into zero or more windows which are produced based on element count information.

#### Arguments
1. `count` *(`Function`)*: Length of each buffer.
2. `[skip]` *(`Function`)*: Number of elements to skip between creation of consecutive windows. If not provided, defaults to the count.

#### Returns
*(`Observable`)*: An observable sequence of windows. 

#### Example
```js
/* Without a skip */
var source = Rx.Observable.range(1, 6)
    .windowWithCount(2)
    .selectMany(function (x) { return x.toArray(); });

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
    .windowWithCount(2, 1)
    .selectMany(function (x) { return x.toArray(); });    

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
### Location

File:
- [`/src/core/observable/windowwithcount.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/windowwithcount.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)

Unit Tests:
- [`/tests/observable/windowwithcount.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/windowwithcount.js)