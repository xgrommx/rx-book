## [`Rx.Observable.prototype.subscribeOnNext(onNext, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observable.js)

{% if book.isPdf %}



{% else %}



{% endif %}

Subscribes a function to invoke for each element in the observable sequence.

#### Arguments
1. `onNext` *(`Function`)*: Function to invoke for each element in the observable sequence.
2. `[thisArg]` *(`Any`)*: Object to use as this when executing callback.

#### Returns
*(Disposable)*: The source sequence whose subscriptions and unsubscriptions happen on the specified scheduler.

#### Example

##### Using functions

[](http://jsbin.com/ziyed/1/embed?js,console)

##### With a thisArg

[](http://jsbin.com/coqew/1/embed?js,console)

