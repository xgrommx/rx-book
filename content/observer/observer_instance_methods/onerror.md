## [`Rx.Observer.prototype.onError(error)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/abstractobserver.js#L33)

Notifies the observer that an exception has occurred.

#### Arguments
1. `error` *(Any)*: The error that has occurred. 

{% if book.isPdf %}

#### [Example](http://jsbin.com/nulan/3/edit?js,console)

```js
var observer = Rx.Observer.create(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

observer.onError(new Error('error!!'));
// => onError: Error: error!!
```

{% else %}

#### Example
[](http://jsbin.com/nulan/3/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}