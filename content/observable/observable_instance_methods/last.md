## [`Rx.Observable.prototype.last([predicate], [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/last.js)

{% if book.isPdf %}

![last](http://reactivex.io/documentation/operators/images/last.png)

{% else %}

<rx-marbles key="last"></rx-marbles>

{% endif %}

Returns the last element of an observable sequence that satisfies the condition in the predicate if specified, else the last element.

#### Arguments
1. `predicate` *(`Function`)*: A predicate function to evaluate for elements in the source sequence. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.

#### Returns
*(`Observable`)*: Sequence containing the last element in the observable sequence that satisfies the condition in the predicate.

#### Example

##### No Match

[](http://jsbin.com/mukum/1/embed?js,console)

##### Without predicate

[](http://jsbin.com/zacije/1/embed?js,console)

##### With predicate

[](http://jsbin.com/coyam/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js

{% endif %}