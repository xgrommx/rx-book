## [`Rx.Observable.prototype.firstOrDefault(predicate, [defaultValue], [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/firstordefault.js)

{% if book.isPdf %}

![firstOrDefault](http://reactivex.io/documentation/operators/images/firstOrDefault.png)

{% else %}



{% endif %}

Returns the first element of an observable sequence that satisfies the condition in the predicate, or a default value if no such element exists.

#### Arguments
1. `predicate` *(`Function`)*: A predicate function to evaluate for elements in the source sequence. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[defaultValue]` *(`Any`)*: The default value if no such element exists.  If not specified, defaults to null.
3. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.

#### Returns
*(`Observable`)*: An observable sequence that contains elements from the input sequence that satisfy the condition.  

#### Example

##### Without a predicate but default value

[](http://jsbin.com/fijet/1/embed?js,console)

#### With a predicate

[](http://jsbin.com/tucaj/1/embed?js,console)
