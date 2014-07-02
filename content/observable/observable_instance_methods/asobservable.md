# asObservable

`Rx.Observable.prototype.asObservable()`
<a href="#rxobservableprototypeasobservable">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L3675-L3680 "View in source") 

Hides the identity of an observable sequence.

#### Returns
*(`Observable`)*: An observable sequence that hides the identity of the source sequence.  

#### Example
```js
// Create subject
var subject = new Rx.AsyncSubject();

// Send a value
subject.onNext(42);
subject.onCompleted();

// Hide its type
var source = subject.asObservable();

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
// => Completed 
```

#### Location

- [`rx`](https://www.npmjs.org/package/rx)