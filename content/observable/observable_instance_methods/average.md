# average

`Rx.Observable.prototype.average([selector])`
<a href="#rxobservableprototypeaverageselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js#L313-L327 "View in source") 

Computes the average of an observable sequence of values that are in the sequence or obtained by invoking a transform function on each element of the input sequence if present.

#### Arguments
1. `[selector]` *(`Function`)*: A transform function to apply to each element.

#### Returns
*(`Observable`)*: An observable sequence containing a single element with the average of the sequence of values.

#### Example
```js
// Without a selector
var source = Rx.Observable.range(0, 9).average();

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

// => Next: 4
// => Completed 

// With a selector
var arr = [
    { value: 1 },
    { value: 2 },
    { value: 3 }
];

var source = Rx.Observable.fromArray(arr).average(function (x) {
    return x.value;
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

// => Next: 2
// => Completed 
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx)