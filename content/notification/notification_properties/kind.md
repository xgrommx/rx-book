## [`Rx.Notification.prototype.kind`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/notification.js#L6)

Gets the kind from the notification which denotes 'N' for OnNext, 'E' for OnError and 'C' for OnCompleted.

#### Returns
*(String)*: The kind from the notification which denotes 'N' for OnNext, 'E' for OnError and 'C' for OnCompleted.

{% if book.isPdf %}

#### [Example](http://jsbin.com/midaci/2/edit?js,console)

```js
var notification = Rx.Notification.createOnCompleted();
console.log(notification.kind);

// => C
```

{% else %}

#### Example

[](http://jsbin.com/midaci/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}