## [`Rx.Notification.prototype.toObservable([scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/notification.js#L36)

Returns an observable sequence with a single notification.

### Arguments
1. `[scheduler = Rx.Scheduler.immediate]` *(Scheduler)*: Scheduler to send out the notification calls on.

#### Returns
*(Observable)*: The observable sequence that surfaces the behavior of the notification upon subscription.

#### Example

{% if book.isPdf %}

##### [Without a scheduler](http://jsbin.com/kujoga/2/edit?js,console)

```js
var source = Rx.Notification.createOnNext(42)
    .toObservable();

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 42
// => onCompleted
```

##### [With a scheduler](http://jsbin.com/piqowi/2/edit?js,console)

```js
var source = Rx.Notification.createOnError(new Error('error!'))
    .toObservable(Rx.Scheduler.timeout);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onError: Error: error!
```

{% else %}

##### Without a scheduler

[](http://jsbin.com/kujoga/2/embed?js,console)

##### With a scheduler

[](http://jsbin.com/piqowi/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}