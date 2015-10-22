## [`Rx.Notification.createOnNext(value)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/notification.js#L55)

Creates an object that represents an OnNext notification to an observer.

### Arguments
1. `value` *(Any)*: The value contained in the notification.

#### Returns
*(Notification)*: The OnNext notification containing the value.

{% if book.isPdf %}

#### [Example](http://jsbin.com/pigaku/2/edit?js,console)

```js
var source = Rx.Observable
    .fromArray([
        Rx.Notification.createOnNext(42),
        Rx.Notification.createOnCompleted()
    ])
    .dematerialize();

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 42
// => onCompleted
```

{% else %}

#### Example

[](http://jsbin.com/pigaku/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}