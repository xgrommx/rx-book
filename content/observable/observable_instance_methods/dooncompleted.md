## [`Rx.Observable.prototype.doOnCompleted(onCompleted, [thisArg])`, `Rx.Observable.prototype.tapOnCompleted(onCompleted, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/do.js)

{% if book.isPdf %}

![doOnCompleted](http://reactivex.io/documentation/operators/images/doOnCompleted.png)

{% else %}



{% endif %}

Invokes an action upon graceful termination of the observable sequence.

This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.

#### Arguments
1. `oncompleted` *(`Function`)*: Function to invoke upon graceful termination of the observable sequence. 
2. [`thisArg`] *(Any)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: The source sequence with the side-effecting behavior applied.

#### Example

##### Using a function

[](http://jsbin.com/foluma/1/embed?js,console)

##### Using a thisArg

[](http://jsbin.com/saxapo/1/embed?js,console)
