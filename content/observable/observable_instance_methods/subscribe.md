## [`Rx.Observable.prototype.subscribe([observer] | [onNext], [onError], [onCompleted])`,
`Rx.Observable.prototype.forEach([observer] | [onNext], [onError], [onCompleted])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observable.js)

{% if book.isPdf %}



{% else %}



{% endif %}

Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.

#### Arguments
1. `[observer]` *(Observer)*: The object that is to receive notifications.
1. `[onNext]` *(`Function`)*: Function to invoke for each element in the observable sequence.
2. `[onError]` *(`Function`)*: Function to invoke upon exceptional termination of the observable sequence.
3. `[onCompleted]` *(`Function`)*: Function to invoke upon graceful termination of the observable sequence.

#### Returns
*(Disposable)*:  The source sequence whose subscriptions and unsubscriptions happen on the specified scheduler. 

#### Example

##### With no arguments

[](http://jsbin.com/zepugu/1/embed?js,console)

##### With an observer

[](http://jsbin.com/jegup/1/embed?js,console)

##### Using functions

[](http://jsbin.com/kafij/1/embed?js,console)
