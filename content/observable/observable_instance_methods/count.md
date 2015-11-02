## [`Rx.Observable.prototype.count([predicate], [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/count.js)

{% if book.isPdf %}

![count](http://reactivex.io/documentation/operators/images/Count.png)

{% else %}

<rx-marbles key="count"></rx-marbles>

{% endif %}

Returns an observable sequence containing a value that represents how many elements in the specified observable sequence satisfy a condition if provided, else the count of items.

#### Arguments
1. `[predicate]` *(`Function`)*: A function to test each element for a condition.  The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing `predicate`.

#### Returns
*(`Observable`)*: An observable sequence containing a single element with a number that represents how many elements in the input sequence satisfy the condition in the predicate function if provided, else the count of items in the sequence.

#### Example

##### Without a predicate

[](http://jsbin.com/xubalo/1/embed?js,console)

##### With a predicate

[](http://jsbin.com/vedid/1/embed?js,console)