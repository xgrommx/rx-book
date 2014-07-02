# forkJoin

`Rx.Observable.prototype.forkJoin(second, resultSelector)`
<a href="#rxobservableprototypeforkjoinsecond-resultselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.experimental.js#L304-L373 "View in source") 

Runs two observable sequences in parallel and combines their last elements.

#### Arguments
1. `second` *(`Observable`)*: Second observable sequence.
2. `resultSelector` *(`Any`)*: The default value if no such element exists.  If not specified, defaults to null.

#### Returns
*(`Observable`)*: An observable sequence that contains elements from the input sequence that satisfy the condition.  

#### Example
```js
var source1 = Rx.Observable.return(42);
var source2 = Rx.Observable.range(0, 3);

var source = source1.forkJoin(source2, function (s1, s2) {
    return s1 + s2; 
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

// => Next: 44
// => Completed
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx).experimental.js