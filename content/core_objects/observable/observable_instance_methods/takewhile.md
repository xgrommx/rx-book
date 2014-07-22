# takeWhile

`Rx.Observable.prototype.takeWhile(predicate, [thisArg])`
<a href="#rxobservableprototypetakewhilepredicate-thisarg">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/takewhile.js "View in source") 

Returns elements from an observable sequence as long as a specified condition is true.

#### Arguments
1. `predicate` *(`Function`)*: A function to test each source element for a condition. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements from the input sequence that occur before the element at which the test no longer passes.  
    
#### Example

[](http://jsbin.com/lopiv/1/embed?js,console)

### Location

File:
- [`/src/core/observable/takewhile.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/takewhile.js)

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
- [`/tests/observable/takewhile.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/takewhile.js)