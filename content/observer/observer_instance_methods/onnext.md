## [`Rx.Observer.prototype.onNext(value)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/abstractobserver.js#L25)

Notifies the observer of a new element in the sequence.

#### Arguments
1. `value` *(Any)*: Next element in the sequence. 

{% if book.isPdf %}

#### [Example](http://jsbin.com/navivu/2/edit?js,console)

```js
var observer = Rx.Observer.create(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

observer.onNext(42);
// => onNext: 42
```

{% else %}

#### Example
[](http://jsbin.com/navivu/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}