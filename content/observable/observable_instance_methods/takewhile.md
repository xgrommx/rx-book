## [`Rx.Observable.prototype.takeWhile(predicate, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/takewhile.js)

{% if book.isPdf %}

![takeWhile](http://reactivex.io/documentation/operators/images/takeWhile.png)

{% else %}



{% endif %}

Returns elements from an observable sequence as long as a specified condition is true.

#### Arguments
1. `predicate` *(`Function`)*: A function to test each source element for a condition. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements from the input sequence that occur before the element at which the test no longer passes.  
    
#### Example

[](http://jsbin.com/lopiv/1/embed?js,console)
