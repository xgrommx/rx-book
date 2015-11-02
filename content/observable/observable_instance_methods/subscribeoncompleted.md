## [`Rx.Observable.prototype.subscribeOnCompleted(onCompleted, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observable.js)

{% if book.isPdf %}



{% else %}



{% endif %}

Subscribes a function to invoke upon graceful termination of the observable sequence.

#### Arguments
1. `onCompleted` *(`Function`)*: Function to invoke upon graceful termination of the observable sequence.
2. `[thisArg]` *(`Any`)*: Object to use as this when executing callback.

#### Returns
*(Disposable)*: The source sequence whose subscriptions and unsubscriptions happen on the specified scheduler.

#### Example

##### Using functions

[](http://jsbin.com/qasimo/1/embed?js,console)

##### With a thisArg

[](http://jsbin.com/qinupu/1/embed?js,console)

