## [`Rx.Observable.prototype.every(predicate, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/every.js)

{% if book.isPdf %}

![every](http://reactivex.io/documentation/operators/images/every.png)

{% else %}



{% endif %}

Determines whether all elements of an observable sequence satisfy a condition.  This is an alias to `all`.

#### Arguments
1. `predicate` *(`Function`)*: A function to test each element for a condition.
2. `[thisArg]` *(`Function`)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate.

#### Example

[](http://jsbin.com/kaxifo/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js

{% endif %}