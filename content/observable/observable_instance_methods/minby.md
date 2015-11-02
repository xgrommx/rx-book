## [`Rx.Observable.prototype.minBy(keySelector, [comparer])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/minby.js)

{% if book.isPdf %}

![minBy](http://reactivex.io/documentation/operators/images/minBy.png)

{% else %}



{% endif %}

Returns the elements in an observable sequence with the minimum key value according to the specified comparer.

#### Arguments
1. `keySelector` *(`Function`)*: Key selector function.
2. `[comparer]` *(`Function`)*:  Comparer used to compare elements.
 
#### Returns
*(`Observable`)*: An observable sequence containing a list of zero or more elements that have a minimum key value.

#### Example

[](http://jsbin.com/hejov/1/embed?js,console)
