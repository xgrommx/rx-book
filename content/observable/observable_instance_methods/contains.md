## [`Rx.Observable.prototype.contains(value, [comparer])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/includes.js)

{% if book.isPdf %}

![contains](http://reactivex.io/documentation/operators/images/contains.png)

{% else %}



{% endif %}

Determines whether an observable sequence contains a specified element with an optional equality comparer.

#### Arguments
1. `value` *(`Any`)*: The value to locate in the source sequence.
2. `[comparer]` *(`Function`)*: An equality comparer function to compare elements.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether the source sequence contains an element that has the specified value.

#### Example

##### Without a comparer

[](http://jsbin.com/dagub/1/embed?js,console)

##### With a comparer

[](http://jsbin.com/cijina/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js

{% endif %}