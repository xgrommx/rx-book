## [`Rx.Observable.prototype.groupByUntil(keySelector, [elementSelector], durationSelector, [comparer])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/groupbyuntil.js)

{% if book.isPdf %}

![groupByUntil](http://reactivex.io/documentation/operators/images/groupByUntil.png)

{% else %}



{% endif %}

Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.

#### Arguments
1. `keySelector` *(`Function`)*: A function to extract the key for each element.
2. `[elementSelector]` *(`Function`)*: A function to map each source element to an element in an observable group.
3. `durationSelector` *(`Function`)*: A function to signal the expiration of a group.
4. `[comparer]` *(`Any`)*: Used to compare objects. If not specified, the default comparer is used.

#### Returns
*(`Observable`)*: A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.

If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.

#### Example

[](http://jsbin.com/fohafa/1/embed?js,console)
