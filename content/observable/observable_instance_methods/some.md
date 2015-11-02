## [`Rx.Observable.prototype.some([predicate], [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/some.js)

{% if book.isPdf %}

![contains](http://reactivex.io/documentation/operators/images/contains.png)

{% else %}

<rx-marbles key="some"></rx-marbles>

{% endif %}

Determines whether any element of an observable sequence satisfies a condition if present, else if any items are in the sequence.  There is an alias to this method called `any`.

#### Arguments
1. `predicate` *(`Function`)*: A function to test each source element for a condition. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate. 

#### Example

[](http://jsbin.com/sekud/1/embed?js,console)
