# notifyOn

`Rx.Observer.prototype.notifyOn(scheduler)`
<a href="#rxobserverprototypenotifyonscheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js#L2862-L2872 "View in source") [&#x24C9;][1]

Schedules the invocation of observer methods on the given scheduler.

#### Arguments
1. `scheduler` *(Scheduler)*: Scheduler to schedule observer messages on.

#### Returns
*(Observer)*: Observer whose messages are scheduled on the given scheduler.
 
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

// Notify on timeout scheduler
var timeoutObserver = observer.notifyOn(Rx.Scheduler.timeout);

timeoutObserver.onNext(42);
// => Next: 42
```

### Location

- rx.js