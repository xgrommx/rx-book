# subscribeOn

`Rx.Observable.prototype.subscribeOn(scheduler)`
<a href="#rxobservableprototypesubscribeonscheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/subscribeon.js "View in source") 

Wraps the source sequence in order to run its subscription and unsubscription logic on the specified scheduler.

This only performs the side-effects of subscription and unsubscription on the specified scheduler. In order to invoke observer callbacks on a scheduler, use `observeOn`.

#### Arguments
1. `scheduler` *(`Scheduler`)*:  Scheduler to notify observers on.

#### Returns
*(`Observable`)*: The source sequence whose observations happen on the specified scheduler. 
 
#### Example

[](http://jsbin.com/socik/1/embed?js,console)

### Location

File:
- [`/src/core/observable/subscribeon.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/subscribeon.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)

Unit Tests:
- [`/tests/observable/subscribeon.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/subscribeon.js)