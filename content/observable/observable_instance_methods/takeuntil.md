## [`Rx.Observable.prototype.takeUntil(other)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/takeuntil.js)

{% if book.isPdf %}

![takeUntil](http://reactivex.io/documentation/operators/images/takeUntil.png)

{% else %}

<rx-marbles key="takeUntil"></rx-marbles>

{% endif %}

Returns the values from the source observable sequence until the other observable sequence or Promise produces a value.

#### Arguments
1. `other` *(`Observable` | `Promise`)*: Observable sequence or Promise that terminates propagation of elements of the source sequence.

#### Returns
*(`Observable`)*: An observable sequence containing the elements of the source sequence up to the point the other sequence or Promise interrupted further propagation.    

#### Example

[](http://jsbin.com/zahor/1/embed?js,console)
