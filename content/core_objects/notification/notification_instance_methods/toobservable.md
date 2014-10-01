# toObservable

`Rx.Notification.prototype.toObservable([scheduler])`
<a href="#rxnotificationprototypetoobservablescheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/notification.js#L35-L46 "View in source")

Returns an observable sequence with a single notification.

### Arguments
1. `[scheduler = Rx.Scheduler.immediate]` *(Scheduler)*: Scheduler to send out the notification calls on.

#### Returns
*(Observable)*: The observable sequence that surfaces the behavior of the notification upon subscription.

#### Example

##### Without a scheduler

[](http://jsbin.com/kujoga/1/embed?js,console)

##### With a scheduler

[](http://jsbin.com/piqowi/1/embed?js,console)

### Location

- rx.js