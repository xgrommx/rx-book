# windowWithTimeOrCount

`Rx.Observable.prototype.windowWithTimeOrCount(timeSpan, count, [scheduler])`
<a href="#rxobservableprototypewindowwithtimeorcounttimespan-count-scheduler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/windowwithtimeorcount.js "View in source") 

Projects each element of an observable sequence into a window that is completed when either it's full or a given amount of time has elapsed.

#### Arguments
1. `timeSpan` *(`Number`)*: Maximum time length of a window.
2. `count` *(`Number`)*: Maximum element count of a window.
3. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run windows timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence of windows. 

#### Example

[](http://jsbin.com/yorom/1/embed?js,console)

### Location

File:
- [`/src/core/observable/windowwithtimeorcount.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/windowwithtimeorcount.js)

Dist:
- [`rx.time.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Time`](http://www.nuget.org/packages/RxJS-Time/)

Unit Tests:
- [`/tests/observable/windowwithtimeorcount.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/windowwithtimeorcount.js)