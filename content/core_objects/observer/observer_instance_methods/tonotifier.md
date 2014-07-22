# toNotifier

`Rx.Observer.prototype.toNotifier()`
<a href="#rxobserverprototypetonotifier">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js#L2862-L2872 "View in source") [&#x24C9;][1]

Creates a notification callback from an observer.

#### Returns
*(Function)*: The function that forwards its input notification to the underlying observer.

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

var notifier = observer.toNotifier();

// Invoke with onNext
notifier(Rx.Notification.createOnNext(42));
// => Next: 42

// Invoke with onCompleted
notifier(Rx.Notification.createOnCompleted());
// => Completed
```

### Location

- rx.js