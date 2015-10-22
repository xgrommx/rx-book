## [`Rx.Observer.fromNotifier(handler)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observer.js#L52)

Creates an observer from a notification callback.

#### Arguments
1. `handler` *(Function)*: Function that handles a notification.

#### Returns
*(Observer)*: The observer object that invokes the specified handler using a notification corresponding to each message it receives.

{% if book.isPdf %}

#### [Example](http://jsbin.com/difobe/3/edit?js,console)

```js
function handler(n) {
    // Handle next calls
    if (n.kind === 'N') {
        console.log('Next: ' + n.value);
    }

    // Handle error calls
    if (n.kind === 'E') {
        console.log('Error: ' + n.exception);
    }

    // Handle completed
    if (n.kind === 'C') {
        console.log('Completed');
    }
}

Rx.Observer.fromNotifier(handler).onNext(42);
// => Next: 42

Rx.Observer.fromNotifier(handler).onError(new Error('error!!!'));
// => Error: Error: error!!!

Rx.Observer.fromNotifier(handler).onCompleted();
// => false
```

{% else %}

#### Example
[](http://jsbin.com/difobe/3/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}