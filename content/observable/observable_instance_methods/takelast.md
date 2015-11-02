## [`Rx.Observable.prototype.takeLast(count)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/takelast.js)

{% if book.isPdf %}

![takeLast.n](http://reactivex.io/documentation/operators/images/takeLast.n.png)

{% else %}

<rx-marbles key="takeLast"></rx-marbles>

{% endif %}

Returns a specified number of contiguous elements from the end of an observable sequence, using an optional scheduler to drain the queue.
  
This operator accumulates a buffer with a length enough to store elements count elements. Upon completion of the source sequence, this buffer is drained on the result sequence. This causes the elements to be delayed.

#### Arguments
1. `count` *(`Number`)*: Number of elements to bypass at the end of the source sequence.

#### Returns
*(`Observable`)*: An observable sequence containing the source sequence elements except for the bypassed ones at the end.   
  
#### Example

[](http://jsbin.com/pulit/1/embed?js,console)
