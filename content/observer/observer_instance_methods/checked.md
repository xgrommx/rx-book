## [`Rx.Observer.prototype.checked()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observer.js#L28)

Checks access to the observer for grammar violations. This includes checking for multiple `onError` or `onCompleted` calls, as well as reentrancy in any of the observer methods.

If a violation is detected, an Error is thrown from the offending observer method call.

#### Returns
*(Observer)*: An observer that checks callbacks invocations against the observer grammar and, if the checks pass, forwards those to the specified observer.
 
{% if book.isPdf %}

#### [Example](http://jsbin.com/vikam/2/edit?js,console)

```js
var observer = Rx.Observer.create(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

var checked = observer.checked();

checked.onNext(42);
// => onNext: 42

checked.onCompleted();
// => onCompleted

// Throws Error('Observer completed')
checked.onNext(42);
```

{% else %}

#### Example
[](http://jsbin.com/vikam/2/embed?js,console)

{% endif %} 
 
{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}