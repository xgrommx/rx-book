## [`Rx.Observable.prototype.distinct([keySelector], [keySerializer])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/distinct.js)

{% if book.isPdf %}

![distinct](http://reactivex.io/documentation/operators/images/distinct.png)

{% else %}

<rx-marbles key="distinct"></rx-marbles>

{% endif %}

Returns an observable sequence that contains only distinct elements according to the keySelector and the comparer. Usage of this operator should be considered carefully due to the maintenance of an internal lookup structure which can grow large. 

#### Arguments
1. `[keySelector]` *(`Function`)*: A function to compute the comparison key for each element.
2. `[keySerializer]` *(`Function`)*: Used to serialize the given object into a string for object comparison.

#### Returns
*(`Observable`)*: An observable sequence only containing the distinct elements, based on a computed key value, from the source sequence.

#### Example

##### Without key selector

[](http://jsbin.com/feceye/1/embed?js,console)

##### With key selector

[](http://jsbin.com/ducib/1/embed?js,console)