# filter

`Rx.Observable.prototype.filter(predicate, [thisArg])`
<a href="#rxobservableprototypefilterpredicate-thisarg">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L4513-L4530 "View in source") 

Filters the elements of an observable sequence based on a predicate.  This is an alias for the `where` method.

#### Arguments
1. `predicate` *(`Function`)*: A function to test each source element for a condition. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.

#### Returns
*(`Observable`)*: An observable sequence that contains elements from the input sequence that satisfy the condition.  

#### Example
```js
var source = Rx.Observable.range(0, 5)
    .filter(function (x, idx, obs) {
        return x % 2 === 0;
    });

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
// => Next: 2 
// => Next: 4 
// => Completed    
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx)