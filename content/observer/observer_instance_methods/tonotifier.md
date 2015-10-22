## [`Rx.Observer.prototype.toNotifier()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observer.js#L10)

Creates a notification callback from an observer.

#### Returns
*(Function)*: The function that forwards its input notification to the underlying observer.

{% if book.isPdf %}

#### [Example](http://jsbin.com/cugigu/2/edit?js,console)

```js
var observer = Rx.Observer.create(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

var notifier = observer.toNotifier();

// Invoke with onNext
notifier(Rx.Notification.createOnNext(42));
// => onNext: 42

// Invoke with onCompleted
notifier(Rx.Notification.createOnCompleted());
// => onCompleted
```

{% else %}

#### Example
[](http://jsbin.com/cugigu/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}