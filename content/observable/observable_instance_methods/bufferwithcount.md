## [`Rx.Observable.prototype.bufferWithCount(count, [skip])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/bufferwithcount.js)

{% if book.isPdf %}

![bufferWithCount](http://reactivex.io/documentation/operators/images/bufferWithCount3.png)

{% else %}



{% endif %}

Projects each element of an observable sequence into zero or more buffers which are produced based on element count information.

#### Arguments
1. `count` *(`Function`)*: Length of each buffer.
2. `[skip]` *(`Function`)*: Number of elements to skip between creation of consecutive buffers. If not provided, defaults to the count.

#### Returns
*(`Observable`)*: An observable sequence of buffers. 

#### Example

##### Without a skip

[](http://jsbin.com/behad/1/embed?js,console)

##### Using a skip

[](http://jsbin.com/vewabo/1/embed?js,console)