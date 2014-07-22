# fromNotifier

`Rx.Observer.fromNotifier(handler)`
<a href="#rxobserverfromotifierhandler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js#L2862-L2872 "View in source") [&#x24C9;][1]

Creates an observer from a notification callback.

#### Arguments
1. `handler` *(Function)*: Function that handles a notification.

#### Returns
*(Observer)*: The observer object that invokes the specified handler using a notification corresponding to each message it receives.

#### Example
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
        console.log('Completed')
    }
}

Rx.Observer.fromNotifier(handler).onNext(42);
// => Next: 42

Rx.Observer.fromNotifier(handler).onError(new Error('error!!!'));
// => Error: Error: error!!!

Rx.Observer.fromNotifier(handler).onCompleted();
// => false
```

### Location

- rx.js