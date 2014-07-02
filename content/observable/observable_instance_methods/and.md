# and

`Rx.Observable.prototype.and(rightSource)`
<a href="#rxobservableprototypeandrightsource">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.joinpatterns.js#L346-L348 "View in source") 

Propagates the observable sequence that reacts first.

#### Arguments
1. `right` *(`Observable`)*: Observable sequence to match with the current sequence.

#### Returns
*(Pattern)*: Pattern object that matches when both observable sequences have an available value.  

#### Example
```js
// Choice of either plan, the first set of timers or second set
var source = Rx.Observable.when(
    Rx.Observable.timer(200).and(Rx.Observable.timer(300)).then(function (x, y) { return 'first'; }),
    Rx.Observable.timer(400).and(Rx.Observable.timer(500)).then(function (x, y) { return 'second'; }),
);

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
// => Next: second
// => Completed 
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx).joinpatterns.js