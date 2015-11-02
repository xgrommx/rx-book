## [`Rx.Observable.prototype.pausable(pauser)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/backpressure/pausable.js)

{% if book.isPdf %}

![pausable](http://reactivex.io/documentation/operators/images/bp.pausable.png)

{% else %}

<rx-marbles key="pausable"></rx-marbles>

{% endif %}

Pauses the underlying observable sequence based upon the observable sequence which yields true/false.  Note that this only works on hot observables.

#### Arguments
1. `pauser` *(Rx.Subject)*: The observable sequence used to pause the underlying sequence.

#### Returns
*(`Observable`)*: The observable sequence which is paused based upon the pauser.

#### Example

[](http://jsbin.com/cicema/1/embed?js,console)
