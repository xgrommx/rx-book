## [`Rx.Observable.prototype.toSet()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/toset.js)

{% if book.isPdf %}

![toSet](http://reactivex.io/documentation/operators/images/toSet.png)

{% else %}



{% endif %}

Creates an observable sequence with a single item of a Set created from the observable sequence.  Note that this only works in an ES6 environment or polyfilled.

#### Returns
*(`Observable`)*: An observable sequence containing a single element with a Set containing all the elements of the source sequence.

#### Example

[](http://jsbin.com/biyaj/1/embed?js,console)
