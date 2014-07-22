# replay

`Rx.Observable.prototype.replay([selector], [bufferSize], [window], [scheduler])`
<a href="#rxobservableprototypereplayselector-buffersize-window-scheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/publish.js "View in source") 

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

### Location

File:
- [`/src/core/observable/publish.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/publish.js)

Dist:
- [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using `rx.binding.js`
  - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Binding`](http://www.nuget.org/packages/RxJS-Binding/)

Unit Tests:
- [`/tests/observable/publish.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/publish.js)