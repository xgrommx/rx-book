# onNext

`Rx.Observer.prototype.onNext(value)`
<a href="#rxobserverprototypeonnextvalue">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js#L2862-L2872 "View in source") [&#x24C9;][1]

Notifies the observer of a new element in the sequence.

#### Arguments
1. `value` *(Any)*: Next element in the sequence. 

#### Example
```js
var observer = Rx.Observer.create(
    function (x) {
        console.log('Next: ' + x)
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    }
);

observer.onNext(42);
// => Next: 42
```

### Location

- rx.js