## [`Rx.Observable.prototype.lastOrDefault([predicate], [defaultValue], [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/lastordefault.js)

{% if book.isPdf %}

![lastOrDefault](http://reactivex.io/documentation/operators/images/lastOrDefault.png)

{% else %}



{% endif %}

Returns the last element of an observable sequence that satisfies the condition in the predicate if specified, else the last element.

#### Arguments
1. `predicate` *(`Function`)*: A predicate function to evaluate for elements in the source sequence. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[defaultValue]` *(`Any`)*: The default value if no such element exists.  If not specified, defaults to null.
3. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.

#### Returns
*(`Observable`)*: Sequence containing the last element in the observable sequence that satisfies the condition in the predicate.

#### Example

##### No Match

[](http://jsbin.com/wokaki/1/embed?js,console)

##### Without predicate

[](http://jsbin.com/cubuh/1/embed?js,console)

##### With predicate

[](http://jsbin.com/vayal/1/embed?js,console)
