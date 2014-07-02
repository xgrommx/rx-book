# defaultIfEmpty

`Rx.Observable.prototype.defaultIfEmpty([defaultValue])`
<a href="#rxobservableprototypedefaultifemptydefaultvalue">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L4111-L4128 "View in source") 

Returns the elements of the specified sequence or the specified value in a singleton sequence if the sequence is empty.

#### Arguments
1. `[defaultValue=null]` *(`Any`)*: The value to return if the sequence is empty. If not provided, this defaults to null.

#### Returns
*(`Observable`)*: An observable sequence that contains the specified default value if the source is empty; otherwise, the elements of the source itself. 
  
#### Example
```js
/* Without a default value */
var source = Rx.Observable.empty().defaultValue();
    
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

// => Next: null
// => Completed 

/* With a defaultValue */
var source = Rx.Observable.empty().defaultValue(false);
    
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

// => Next: false
// => Completed 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx)