# onError

`Rx.Observer.prototype.onError(error)`
<a href="#rxobserverprototypeonerrorerror">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js#L2862-L2872 "View in source") [&#x24C9;][1]

Notifies the observer that an exception has occurred.

#### Arguments
1. `error` *(Any)*: The error that has occurred. 

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

observer.onError(new Error('error!!'));
// => Error: Error: error!!
```

### Location

- rx.js