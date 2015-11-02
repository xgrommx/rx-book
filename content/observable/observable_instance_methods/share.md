## [`Rx.Observable.prototype.share()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/share.js)

{% if book.isPdf %}

![share](http://reactivex.io/documentation/operators/images/publishRefCount.png)

{% else %}



{% endif %}

Returns an observable sequence that shares a single subscription to the underlying sequence. 

This operator is a specialization of `publish` which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
   
#### Example

##### Without share

[](http://jsbin.com/copixu/1/embed?js,console)  

##### With share
    
[](http://jsbin.com/nejiw/1/embed?js,console)
