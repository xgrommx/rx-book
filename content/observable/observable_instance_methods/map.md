## [`Rx.Observable.prototype.map(selector, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/select.js)

{% if book.isPdf %}

![map](http://reactivex.io/documentation/operators/images/map.png)

{% else %}

<rx-marbles key="map"></rx-marbles>

{% endif %}

Projects each element of an observable sequence into a new form by incorporating the element's index.  This is an alias for the `select` method.

#### Arguments
1. `selector` *(`Function`)*:  Transform function to apply to each source element.  The selector is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.
 
#### Returns
*(`Observable`)*: An observable sequence which results from the comonadic bind operation.

#### Example

[](http://jsbin.com/sureq/1/embed?js,console)
