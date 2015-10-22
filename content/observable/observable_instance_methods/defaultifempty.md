## [`Rx.Observable.prototype.defaultIfEmpty([defaultValue])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/defaultifempty.js)

{% if book.isPdf %}

![defaultIfEmpty](http://reactivex.io/documentation/operators/images/defaultIfEmpty.png)

{% else %}



{% endif %}

Returns the elements of the specified sequence or the specified value in a singleton sequence if the sequence is empty.

#### Arguments
1. `[defaultValue=null]` *(`Any`)*: The value to return if the sequence is empty. If not provided, this defaults to null.

#### Returns
*(`Observable`)*: An observable sequence that contains the specified default value if the source is empty; otherwise, the elements of the source itself. 
  
#### Example

##### Without a default value

[](http://jsbin.com/woxed/1/embed?js,console)

##### With a defaultValue

[](http://jsbin.com/yezodu/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx)

{% endif %}