## [`Rx.Observable.prototype.skipWhile([predicate], [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/skipwhile.js)

{% if book.isPdf %}

![skipWhile](http://reactivex.io/documentation/operators/images/skipWhile.png)

{% else %}



{% endif %}

Bypasses elements in an observable sequence as long as a specified condition is true and then returns the remaining elements.

#### Arguments
1. `predicate` *(`Function`)*: A function to test each source element for a condition. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements from the input sequence starting at the first element in the linear series that does not pass the test specified by predicate.   
 
#### Example

[](http://jsbin.com/qalov/1/embed?js,console)
