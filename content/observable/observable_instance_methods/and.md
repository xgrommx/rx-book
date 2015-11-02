## [`Rx.Observable.prototype.and(rightSource)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/and.js)

{% if book.isPdf %}

![and](http://reactivex.io/documentation/operators/images/and_then_when.C.png)

{% else %}



{% endif %}

Propagates the observable sequence that reacts first.

#### Arguments
1. `right` *(`Observable`)*: Observable sequence to match with the current sequence.

#### Returns
*(`Pattern`)*: Pattern object that matches when both observable sequences have an available value.

#### Example

[](http://jsbin.com/boyane/1/embed?js,console)