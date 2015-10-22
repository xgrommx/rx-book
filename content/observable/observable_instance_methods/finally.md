## [`Rx.Observable.prototype.finally(action)`, `Rx.Observable.prototype.ensure(action)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/finally.js)

{% if book.isPdf %}

![finally](http://reactivex.io/documentation/operators/images/finally.png)

{% else %}



{% endif %}

Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.  There is an alias called `finallyAction` for browsers <IE9

#### Arguments
1. `predicate` *(`Function`)*: A function to test each source element for a condition;  The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.

#### Returns
*(`Observable`)*: An observable sequence that contains elements from the input sequence that satisfy the condition.  

#### Example

[](http://jsbin.com/woture/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx)

{% endif %}