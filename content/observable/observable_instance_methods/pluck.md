# pluck

`Rx.Observable.prototype.pluck(property)`
<a href="#rxobservableprototypepluckproperty">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/pluck.js "View in source") 

Projects each element of an observable sequence into a new form by incorporating the element's index.

#### Arguments
1. `property` *(`String`)*: The property to pluck.
 
#### Returns
*(`Observable`)*: Returns a new Observable sequence of property values.

#### Example

[](http://jsbin.com/wigiy/1/embed?js,console)

### Location

File:
- [`/src/core/observable/pluck.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/pluck.js)

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
- [`/tests/observable/pluck.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/pluck.js)
