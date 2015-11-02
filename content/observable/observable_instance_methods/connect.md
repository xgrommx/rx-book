## [`ConnectableObservable.prototype.connect()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/connectableobservable.js)

{% if book.isPdf %}

![connect](http://reactivex.io/documentation/operators/images/publishConnect.png)

{% else %}



{% endif %}

Connects the observable wrapper to its source. All subscribed observers will receive values from the underlying observable sequence as long as the connection is established.

#### Returns
*(Disposable)*: Disposable object used to disconnect the observable wrapper from its source, causing subscribed observer to stop receiving values from the underlying observable sequence.
 
#### Example

[](http://jsbin.com/timob/1/embed?js,console)