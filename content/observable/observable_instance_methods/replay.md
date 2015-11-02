## [`Rx.Observable.prototype.replay([selector], [bufferSize], [window], [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/replay.js)

{% if book.isPdf %}

![replay](http://reactivex.io/documentation/operators/images/replay.png)

{% else %}



{% endif %}

Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.

This operator is a specialization of `multicast` using a `Rx.ReplaySubject`.

#### Arguments
1. `[selector]` *(`Function`)*: Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all the notifications of the source subject to the specified replay buffer trimming policy.
2. `[bufferSize]` *(`Number`)*: Maximum element count of the replay buffer.
3. `[window]` *(`Number`)*: Maximum time length of the replay buffer in milliseconds.
4. `[scheduler]` *(`Scheduler`)*: Scheduler where connected observers within the selector function will be invoked on.
 
#### Returns
*(`Observable`)*: An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.

#### Example

[](http://jsbin.com/bokamu/1/embed?js,console)
