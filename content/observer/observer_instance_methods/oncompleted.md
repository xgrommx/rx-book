# onCompleted

`Rx.Observer.prototype.onCompleted()`
<a href="#rxobserverprototypeoncompleted">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js#L2862-L2872 "View in source") [&#x24C9;][1]

Notifies the observer of the end of the sequence.

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

observer.onCompleted();
// => Completed
```

### Location

- rx.js