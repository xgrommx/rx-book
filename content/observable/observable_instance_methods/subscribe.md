# subscribe

`Rx.Observable.prototype.subscribe([observer] | [onNext], [onError], [onCompleted])`
<a href="#rxobservableprototypesubscribeobserver--onnext-onerror-oncompleted">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observable.js "View in source") 

Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.

#### Arguments
1. `[observer]` *(Observer)*: The object that is to receive notifications.
1. `[onNext]` *(`Function`)*: Function to invoke for each element in the observable sequence.
2. `[onError]` *(`Function`)*: Function to invoke upon exceptional termination of the observable sequence.
3. `[onCompleted]` *(`Function`)*: Function to invoke upon graceful termination of the observable sequence.

#### Returns
*(Disposable)*:  The source sequence whose subscriptions and unsubscriptions happen on the specified scheduler. 

#### Example

##### With no arguments

[](http://jsbin.com/zepugu/1/embed?js,console)

##### With an observer

[](http://jsbin.com/jegup/1/embed?js,console)

##### Using functions

[](http://jsbin.com/kafij/1/embed?js,console)

### Location

File:
- [`/src/core/observable.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observable.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)

Unit Tests:
- [`/tests/core/observable.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/core/observable.js)