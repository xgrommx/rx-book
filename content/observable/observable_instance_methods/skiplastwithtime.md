## [`Rx.Observable.prototype.skipLastWithTime(duration)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/skiplastwithtime.js)

{% if book.isPdf %}

![skipLastWithTime](http://reactivex.io/documentation/operators/images/skipLastWithTime.png)

{% else %}



{% endif %}

Bypasses a specified number of elements at the end of an observable sequence.

This operator accumulates a queue with a length enough to store the first `count` elements. As more elements are received, elements are taken from the front of the queue and produced on the result sequence. This causes elements to be delayed. 

#### Arguments
1. `duration` *(`Number`)*: Duration for skipping elements from the end of the sequence.
1. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the timer on. If not specified, defaults to timeout scheduler.

#### Returns
*(`Observable`)*: An observable sequence with the elements skipped during the specified duration from the end of the source sequence.
 
#### Example

[](http://jsbin.com/tiyedi/1/embed?js,console)
