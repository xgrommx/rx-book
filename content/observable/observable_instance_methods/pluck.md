# pluck

`Rx.Observable.prototype.pluck(property)`
<a href="#rxobservableprototypepluckproperty">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/pluck.js "View in source") 

Projects each element of an observable sequence into a new form by incorporating the element's index.  This is an alias for the `select` method.

#### Arguments
1. `property` *(`String`)*: The property to pluck.
 
#### Returns
*(`Observable`)*: Returns a new Observable sequence of property values.

#### Example
```js
var source = Rx.Observable
    .fromArray([
        { value: 0 },
        { value: 1 },
        { value: 2 }
    ])
    .pluck('value');

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

// => Next: 0
// => Next: 1
// => Next: 2
// => Completed 
```

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