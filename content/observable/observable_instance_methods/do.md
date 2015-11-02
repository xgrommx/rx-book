## [`Rx.Observable.prototype.do(observer | [onNext], [onError], [onCompleted])`, `Rx.Observable.prototype.doAction(observer | [onNext], [onError], [onCompleted])`, `Rx.Observable.prototype.tap(observer | [onNext], [onError], [onCompleted])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/do.js)

{% if book.isPdf %}

![do](http://reactivex.io/documentation/operators/images/do.png)

{% else %}



{% endif %}

Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.

This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.

There is an alias to this method `doAction` for browsers <IE9 and `tap` as well.

#### Arguments
1. `[observer]` *(Observer)*: An observer to invoke for each element in the observable sequence.
1. `[onNext]` *(`Function`)*: Function to invoke for each element in the observable sequence.
2. `[onError]` *(`Function`)*: Function to invoke upon exceptional termination of the observable sequence. Used if only the first parameter is also a function.
3. `[oncompleted]` *(`Function`)*: Function to invoke upon graceful termination of the observable sequence. Used if only the first parameter is also a function.

#### Returns
*(`Observable`)*: The source sequence with the side-effecting behavior applied.

#### Example

##### Using a function

[](http://jsbin.com/viquwa/1/embed?js,console)

##### Using an observer

[](http://jsbin.com/votaq/1/embed?js,console)