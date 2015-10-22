## [`Rx.Notification.createOnCompleted()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/notification.js#L84)

Creates an object that represents an OnCompleted notification to an observer.

#### Returns
*(Notification)*: The OnCompleted notification.

{% if book.isPdf %}

#### [Example](http://jsbin.com/gifoh/2/edit?js,console)

```js
var source = Rx.Observable
    .fromArray([
        Rx.Notification.createOnCompleted()
    ])
    .dematerialize();

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onCompleted

```

{% else %}

#### Example

[](http://jsbin.com/gifoh/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}