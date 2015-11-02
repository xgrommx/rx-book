## [`Rx.Observable.prototype.observeOn(scheduler)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/observeon.js)

{% if book.isPdf %}

![observeOn](http://reactivex.io/documentation/operators/images/observeOn.png)

{% else %}



{% endif %}


Wraps the source sequence in order to run its observer callbacks on the specified scheduler.

This only invokes observer callbacks on a scheduler. In case the subscription and/or unsubscription actions have side-effects that require to be run on a scheduler, use subscribeOn.

#### Arguments
1. `scheduler` *(`Scheduler`)*:  Scheduler to notify observers on.

#### Returns
*(`Observable`)*: The source sequence whose observations happen on the specified scheduler. 
 
#### Example

[](http://jsbin.com/hehov/1/embed?js,console)
