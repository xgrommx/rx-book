## [`Rx.Observable.prototype.toMap(keySelector, [elementSelector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/tomap.js)

{% if book.isPdf %}

![toMap](http://reactivex.io/documentation/operators/images/toMap.png)

{% else %}



{% endif %}

Converts the observable sequence to a Map if it exists.  Note that this only works in an ES6 environment or polyfilled.

#### Arguments
1. `keySelector` *(`Function`)*: A function which produces the key for the Map.
2. `[elementSelector]` *(`Function`)*: An optional function which produces the element for the Map. If not present, defaults to the value from the observable sequence.

#### Returns
*(`Observable`)*: An observable sequence with a single value of a Map containing the values from the observable sequence.

#### Example

[](http://jsbin.com/vukig/1/embed?js,console)

