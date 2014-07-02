# dematerialize

`Rx.Observable.prototype.dematerialize()`
<a href="#rxobservableprototypedematerialize">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L3711-L3718 "View in source") 

Dematerializes the explicit notification values of an observable sequence as implicit notifications.

#### Returns
*(`Observable`)*: An observable sequence exhibiting the behavior corresponding to the source sequence's notification values.
  
#### Example
```js
var source = Rx.Observable
    .fromArray([
        Rx.Notification.createOnNext(42),
        Rx.Notification.createOnError(new Error('woops'))
    ])
    .dematerialize();
    
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
// => Error: Error: woops 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx)