## [`Rx.Observer.prototype.onCompleted()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/abstractobserver.js#L43)

Notifies the observer of the end of the sequence.

{% if book.isPdf %}

#### [Example](http://jsbin.com/yuqade/2/edit?js,console)

```js
var observer = Rx.Observer.create(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

observer.onCompleted();
// => onCompleted
```

{% else %}

#### Example
[](http://jsbin.com/yuqade/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}