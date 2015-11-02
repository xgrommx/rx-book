## [`Rx.Observable.prototype.switch()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/switch.js)

{% if book.isPdf %}

![switch](http://reactivex.io/documentation/operators/images/switch.png)

{% else %}



{% endif %}

Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.  There is an alias for this method called `switchLatest` for browsers <IE9.
  
#### Returns
*(`Observable`)*: The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.  
 
#### Example

[](http://jsbin.com/gojar/1/embed?js,console)