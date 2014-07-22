# publishValue

`Rx.Observable.prototype.publishValue([selector])`
<a href="#rxobservableprototypepublishvalueselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/publishvalue.js "View in source") 

Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
   
This operator is a specialization of `multicast` using a `Rx.BehaviorSubject`.

#### Arguments
1. `[selector]` *(`Function`)*: Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive immediately receive the initial value, followed by all notifications of the source from the time of the subscription on.
 
#### Returns
*(ConnectableObservable)*: An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
 
#### Example

[](http://jsbin.com/butol/1/embed?js,console)

### Location

File:
- [`/src/core/observable/publishvalue.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/publishvalue.js)

Dist:
- [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) 
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using `rx.binding.js`
  - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Binding`](http://www.nuget.org/packages/RxJS-Binding/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/publishvalue.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/publishvalue.js)