## [`Rx.Observable.while(condition, source)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/while.js)

{% if book.isPdf %}

![while](http://reactivex.io/documentation/operators/images/while.png)

{% else %}



{% endif %}

Repeats source as long as condition holds emulating a while loop.  There is an alias for this method called 'whileDo' for browsers <IE9.

### Arguments
1. `condition` *(`Function`)*: The condition which determines if the source will be repeated.
2. `source` *(`Observable`)*: The observable sequence that will be run if the condition function returns true.

#### Returns
*(`Observable`)*: An observable sequence which is repeated as long as the condition holds. 

#### Example

[](http://jsbin.com/serat/1/embed?js,console)
