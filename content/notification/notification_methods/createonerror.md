## [`Rx.Notification.createOnError(exception)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/notification.js#L70)

Creates an object that represents an OnError notification to an observer.

### Arguments
1. `exception` *(Any)*: The exception contained in the notification.

#### Returns
*(Notification)*: The OnError notification containing the exception.

{% if book.isPdf %}

#### [Example](http://jsbin.com/capiq/2/edit?js,console)

```js
var source = Rx.Observable
    .fromArray([
        Rx.Notification.createOnError(new Error('woops'))
    ])
    .dematerialize();

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onError: Error: woops
```

{% else %}

#### Example

[](http://jsbin.com/capiq/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}