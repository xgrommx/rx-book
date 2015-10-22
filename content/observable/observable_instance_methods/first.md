## [`Rx.Observable.prototype.first([predicate], [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/first.js)

{% if book.isPdf %}

![first](http://reactivex.io/documentation/operators/images/first.png)

{% else %}

<rx-marbles key="first"></rx-marbles>

{% endif %}

Returns the first element of an observable sequence that satisfies the condition in the predicate if present else the first item in the sequence.

#### Arguments
1. `predicate` *(`Function`)*: A predicate function to evaluate for elements in the source sequence. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.

#### Returns
*(`Observable`)*: An observable sequence that contains elements from the input sequence that satisfy the condition.  

#### Example

##### No Match

[](http://jsbin.com/begup/1/embed?js,console)

##### Without a predicate

[](http://jsbin.com/guhob/1/embed?js,console)

##### With a predicate

[](http://jsbin.com/caceg/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js

{% endif %}