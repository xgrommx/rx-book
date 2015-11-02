## [`Rx.Observable.prototype.shareValue(value)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/sharevalue.js)

{% if book.isPdf %}



{% else %}



{% endif %}

Returns an observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
   
This operator is a specialization of `publishValue` which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
 
#### Example

[](http://jsbin.com/pebufu/1/embed?js,console)
