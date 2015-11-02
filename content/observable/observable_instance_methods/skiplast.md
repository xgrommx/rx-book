## [`Rx.Observable.prototype.skipLast(count)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/skiplast.js)

{% if book.isPdf %}

![skipLast](http://reactivex.io/documentation/operators/images/skipLast.png)

{% else %}

<rx-marbles key="skipLast"></rx-marbles>

{% endif %}

Bypasses a specified number of elements at the end of an observable sequence.

This operator accumulates a queue with a length enough to store the first `count` elements. As more elements are received, elements are taken from the front of the queue and produced on the result sequence. This causes elements to be delayed. 

#### Arguments
1. `count` *(`Number`)*: Number of elements to bypass at the end of the source sequence.

#### Returns
*(`Observable`)*: An observable sequence containing the source sequence elements except for the bypassed ones at the end.   
  
#### Example

[](http://jsbin.com/dawusu/1/embed?js,console)