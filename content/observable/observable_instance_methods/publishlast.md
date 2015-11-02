## [`Rx.Observable.prototype.publishLast([selector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/publishlast.js)

{% if book.isPdf %}

![publishLast](http://reactivex.io/documentation/operators/images/publishLast.png)

{% else %}



{% endif %}

Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.

This operator is a specialization of `multicast` using a `Rx.AsyncSubject`.

#### Arguments
1. `[selector]` *(`Function`)*: Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will only receive the last notification of the source.

#### Returns
*(ConnectableObservable)*: An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
 
#### Example

[](http://jsbin.com/wapis/1/embed?js,console)
