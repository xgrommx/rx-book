# repeat

`Rx.Observable.prototype.repeat(repeatCount)`
<a href="#rxobservableprototyperepeatrepeatcount">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/repeatproto.js "View in source") 

Repeats the observable sequence a specified number of times. If the repeat count is not specified, the sequence repeats indefinitely.
 
#### Arguments
1. `repeatCount` *(`Number`)*:  Number of times to repeat the sequence. If not provided, repeats the sequence indefinitely.
 
#### Returns
*(`Observable`)*: The observable sequence producing the elements of the given sequence repeatedly.  

#### Example

[](http://jsbin.com/raqico/1/embed?js,console)

### Location

File:
- [`/src/core/observable/repeatproto.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/repeatproto.js)

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
- [`/tests/observable/repeatproto.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/repeatproto.js)