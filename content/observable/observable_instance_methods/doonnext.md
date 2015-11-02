## [`Rx.Observable.prototype.doOnNext(onNext, [thisArg])`, `Rx.Observable.prototype.tapOnNext(onNext, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/do.js)

{% if book.isPdf %}

![doOnNext](http://reactivex.io/documentation/operators/images/doOnNext.png)

{% else %}



{% endif %}

Invokes an action for each element of the observable sequence.

This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.

#### Arguments
1. `onNext` *(`Function`)*: Function to invoke for each element in the observable sequence.
2. [`thisArg`] *(Any)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: The source sequence with the side-effecting behavior applied.

#### Example

##### Using a function

[](http://jsbin.com/mafoze/1/embed?js,console)

##### Using a thisArg

[](http://jsbin.com/butumu/1/embed?js,console)
