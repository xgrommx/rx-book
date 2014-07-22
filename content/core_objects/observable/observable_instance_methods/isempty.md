# isEmpty

`Rx.Observable.prototype.isEmpty()`
<a href="#rxobservableprototypeisempty">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js#L166-L168 "View in source") 

Determines whether an observable sequence is empty.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether the source sequence is empty.

#### Example
```js
/* Not empty */
var source = Rx.Observable.range(0, 5)
    .isEmpty()

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

// => Next: false
// => Completed    

/* Empty */
var source = Rx.Observable.empty()
    .isEmpty()

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

// => Next: true
// => Completed  
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js