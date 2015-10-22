## [`Rx.Observer.prototype.notifyOn(scheduler)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observer.js#L67)

Schedules the invocation of observer methods on the given scheduler.

#### Arguments
1. `scheduler` *(Scheduler)*: Scheduler to schedule observer messages on.

#### Returns
*(Observer)*: Observer whose messages are scheduled on the given scheduler.

{% if book.isPdf %}

#### [Example](http://jsbin.com/quwavu/3/edit?js,console)

```js
var observer = Rx.Observer.create(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// Notify on timeout scheduler
var timeoutObserver = observer.notifyOn(Rx.Scheduler.timeout);

timeoutObserver.onNext(42);
// => onNext: 42
```

{% else %}

#### Example
[](http://jsbin.com/quwavu/3/embed?js,console)

{% endif %} 
 
{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}