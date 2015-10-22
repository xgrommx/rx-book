## [`Rx.Notification.prototype.accept([observer] | [onNext], [onError], [onCompleted])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/notification.js#L23)

Invokes the delegate corresponding to the notification or the observer's method corresponding to the notification and returns the produced result.

### Arguments
1. `[observer]` *(Observer)*: Observer to invoke the notification on.
1. `[onNext]` *(Function)*: Function to invoke for an OnNext notification.
2. `[onError]` *(Function)*: Function to invoke for an OnError notification.
2. `[onError]` *(Function)*: Function to invoke for an OnCompleted notification.

#### Returns
*(Any)*: Result produced by the observation.

#### Example

{% if book.isPdf %}

##### [Using an observer](http://jsbin.com/bazah/2/edit?js,console)

```js
var observer = Rx.Observer.create(x => x);

var notification = Rx.Notification.createOnNext(42);

console.log(notification.accept(observer));

// => 42
```


##### [Using a function](http://jsbin.com/tuqiye/3/edit?js,console)

```js
var notification = Rx.Notification.createOnNext(42);

console.log(notification.accept(x => x));
// => 42
```

{% else %}

##### Using an observer

[](http://jsbin.com/bazah/2/embed?js,console)


##### Using a function

[](http://jsbin.com/tuqiye/3/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}
