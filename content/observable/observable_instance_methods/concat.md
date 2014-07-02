# concat

`Rx.Observable.prototype.concat(...args)`
<a href="#rxobservableprototypeconcatargs">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L3223-L3227 "View in source") 

Concatenates all the observable sequences.  This takes in either an array or variable arguments to concatenate.

#### Arguments
1. `args` *(arguments | Array)*: An array or arguments of Observable sequences.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements of each given sequence, in sequential order. 

#### Example
```js
var source = Rx.Observable
    .return(42)
    .concat(Rx.Observable.return(56), Rx.Observable.return(72));
    
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

// => Next: 42
// => Next: 56
// => Next: 72
// => Completed 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx)