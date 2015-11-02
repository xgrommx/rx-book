## [`Rx.Observable.prototype.pausableBuffered(pauser)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/backpressure/pausablebuffered.js)

{% if book.isPdf %}

![pausableBuffered](http://reactivex.io/documentation/operators/images/bp.pausableBuffered.png)

{% else %}

<rx-marbles key="pausableBuffered"></rx-marbles>

{% endif %}

Pauses the underlying observable sequence based upon the observable sequence which yields true/false, and yields the values that were buffered while paused. Note that this only works on hot observables.

#### Arguments
1. `pauser` *(Rx.Subject)*: The observable sequence used to pause the underlying sequence.

#### Returns
*(`Observable`)*: The observable sequence which is paused based upon the pauser.

#### Example

[](http://jsbin.com/nekey/1/embed?js,console)
