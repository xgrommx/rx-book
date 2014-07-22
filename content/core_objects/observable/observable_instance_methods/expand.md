# expand

`Rx.Observable.prototype.expand(selector, [scheduler])`
<a href="#expand">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.experimental.js#L179-L234 "View in source") 

Expands an observable sequence by recursively invoking selector.

#### Arguments
1. `selector` *(`Function`)*: Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again.
2. `[scheduler=Rx.Scheduler.immediate]` *(`Scheduler`)*: Scheduler on which to perform the expansion. If not provided, this defaults to the immediate scheduler.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate.

#### Example
```js
var source = Rx.Observable.return(42)
    .expand(function (x) { return Rx.Observable.return(42 + x); })
    .take(5);

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

// => Next: 42 
// => Next: 84 
// => Next: 126 
// => Next: 168 
// => Next: 210 
// => Completed    
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx).experimental.js