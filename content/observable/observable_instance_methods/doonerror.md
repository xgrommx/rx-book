## [`Rx.Observable.prototype.doOnError(onError, [thisArg])`, `Rx.Observable.prototype.tapOnError(onError, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/do.js)

{% if book.isPdf %}

![doOnError](http://reactivex.io/documentation/operators/images/doOnError.png)

{% else %}



{% endif %}

Invokes an action upon exceptional termination of the observable sequence.

This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.

#### Arguments
1. `onError` *(`Function`)*: Function to invoke upon exceptional termination of the observable sequence.
2. [`thisArg`] *(Any)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: The source sequence with the side-effecting behavior applied.

#### Example

##### Using a function

[](http://jsbin.com/girara/1/embed?js,console)

##### Using a thisArg

[](http://jsbin.com/keqovo/1/embed?js,console)
