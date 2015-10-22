## [`Rx.Observable.prototype.forkJoin(second, resultSelector)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/forkjoinproto.js)

{% if book.isPdf %}

![forkJoin](http://reactivex.io/documentation/operators/images/forkJoin.png)

{% else %}



{% endif %}

Runs two observable sequences in parallel and combines their last elements.

#### Arguments
1. `second` *(`Observable`)*: Second observable sequence.
2. `resultSelector` *(`Any`)*: The default value if no such element exists.  If not specified, defaults to null.

#### Returns
*(`Observable`)*: An observable sequence that contains elements from the input sequence that satisfy the condition.  

#### Example

[](http://jsbin.com/vezova/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).experimental.js

{% endif %}