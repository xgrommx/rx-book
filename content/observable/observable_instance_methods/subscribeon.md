## [`Rx.Observable.prototype.subscribeOn(scheduler)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/subscribeon.js)

{% if book.isPdf %}

![subscribeOn](http://reactivex.io/documentation/operators/images/subscribeOn.png)

{% else %}



{% endif %}

Wraps the source sequence in order to run its subscription and unsubscription logic on the specified scheduler.

This only performs the side-effects of subscription and unsubscription on the specified scheduler. In order to invoke observer callbacks on a scheduler, use `observeOn`.

#### Arguments
1. `scheduler` *(`Scheduler`)*:  Scheduler to notify observers on.

#### Returns
*(`Observable`)*: The source sequence whose observations happen on the specified scheduler. 
 
#### Example

[](http://jsbin.com/socik/1/embed?js,console)
