# connect

`ConnectableObservable.prototype.connect()`
<a href="#connectableobservableprototypeconnect">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js#L504 "View in source") 

Connects the observable wrapper to its source. All subscribed observers will receive values from the underlying observable sequence as long as the connection is established.

#### Returns
*(Disposable)*: Disposable object used to disconnect the observable wrapper from its source, causing subscribed observer to stop receiving values from the underlying observable sequence.
 
#### Example

[](http://jsbin.com/timob/1/embed?js,console)

#### Location

- [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)