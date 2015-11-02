## [`Rx.Observable.prototype.take(count, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/take.js)

{% if book.isPdf %}

![take](http://reactivex.io/documentation/operators/images/take.png)

{% else %}

<rx-marbles key="take"></rx-marbles>

{% endif %}

Returns a specified number of contiguous elements from the start of an observable sequence, using the specified scheduler for the edge case of `take(0)`.
  
#### Arguments
1. `count` *(`Number`)*: The number of elements to return.
2. `[schduler]` *(`Scheduler`)*: Scheduler used to produce an onCompleted message in case `count` is set to 0.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements that occur after the specified index in the input sequence.   

#### Example

[](http://jsbin.com/ticoya/1/embed?js,console)
