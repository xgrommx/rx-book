#accept

`Rx.Notification.prototype.accept([observer] | [onNext], [onError], [onCompleted])`
<a href="#rxnotificationprototypeacceptobserver--onnext-onerror-oncompleted">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/notification.js#L21-L26 "View in source")

Invokes the delegate corresponding to the notification or the observer's method corresponding to the notification and returns the produced result.

### Arguments
1. `[observer]` *(Observer)*: Observer to invoke the notification on.
1. `[onNext]` *(Function)*: Function to invoke for an OnNext notification.
2. `[onError]` *(Function)*: Function to invoke for an OnError notification.
2. `[onError]` *(Function)*: Function to invoke for an OnCompleted notification.

#### Returns
*(Any)*: Result produced by the observation.

#### Example

##### Using an observer

[](http://jsbin.com/bazah/1/embed?js,console)


##### Using a function

[](http://jsbin.com/tuqiye/1/embed?js,console)

### Location

- rx.js
