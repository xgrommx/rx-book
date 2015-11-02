## [`Rx.Observable.prototype.shareReplay([bufferSize], [window], [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/sharereplay.js)

{% if book.isPdf %}



{% else %}



{% endif %}

Returns an observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.

This operator is a specialization of `replay` that connects to the connectable observable sequence when the number of observers goes from zero to one, and disconnects when there are no more observers.

#### Arguments
1. `[bufferSize]` *(`Number`)*: Maximum element count of the replay buffer.
2. `[window]` *(`Number`)*: Maximum time length of the replay buffer in milliseconds.
3. `[scheduler]` *(`Scheduler`)*: Scheduler where connected observers within the selector function will be invoked on.
 
#### Returns
*(`Observable`)*: An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.

#### Example

[](http://jsbin.com/cihow/1/embed?js,console)
