# amb

`Rx.Observable.prototype.amb(rightSource)`
<a href="#rxobservableprototypeambrightsource">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L2996-L3055 "View in source") 

Propagates the observable sequence that reacts first.

#### Arguments
1. `rightSource` *(`Observable`)*: Second observable sequence.

#### Returns
*(`Observable`)*: An observable sequence that surfaces either of the given sequences, whichever reacted first.

#### Example
```js
var first = Rx.Observable.timer(300).map(function () { return 'first'; });
var second = Rx.Observable.timer(500).map(function () { return 'second'; });

var source = first.amb(second);

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

// => Next: first
// => Completed    
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx)