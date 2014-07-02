# contains

`Rx.Observable.prototype.contains(value, [comparer])`
<a href="#rxobservableprototypecontainsvalue-comparer">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js#L198-L203 "View in source") 

Determines whether an observable sequence contains a specified element with an optional equality comparer.

#### Arguments
1. `value` *(`Any`)*: The value to locate in the source sequence.
2. `[comparer]` *(`Function`)*: An equality comparer function to compare elements.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether the source sequence contains an element that has the specified value.

#### Example
```js
/* Without a comparer */
var source = Rx.Observable.return(42)
    .contains(42);
    
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

// => Next: true
// => Completed 

/* With a comparer */
var source = Rx.Observable.return({ value: 42 })
    .contains(
        { value: 42}, 
        function (x, y) { return x.value === y.value; }
    );
    
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

// => Next: true
// => Completed 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js