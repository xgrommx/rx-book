# window

`Rx.Observable.prototype.window([windowOpenings], [windowBoundaries], windowClosingSelector)`
<a href="#rxobservableprototypewindowwindowopenings-windowboundaries-windowclosingselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/window.js "View in source") 

Projects each element of an observable sequence into zero or more windows.

```js
// With window closing selector
Rx.Observable.prototype.window(windowClosingSelector);

// With window opening and window closing selector
Rx.Observable.prototype.window(windowOpenings, windowClosingSelector);

// With boundaries
Rx.Observable.prototype.window(windowBoundaries);
```

#### Arguments
1. `[windowOpenings]` *(`Observable`)*: Observable sequence whose elements denote the creation of new windows 
2.`[windowBoundaries]` *(`Observable`)*: Sequence of window boundary markers. The current window is closed and a new window is opened upon receiving a boundary marker. 
3. `windowClosingSelector` *(`Function`)*: A function invoked to define the closing of each produced window.

#### Returns
*(`Observable`)*: An observable sequence of windows.

#### Example

##### With window boundaries

[](http://jsbin.com/kuqake/1/embed?js,console)  

##### With window opening and window closing selector

[](http://jsbin.com/maloda/1/embed?js,console)

##### With openings and closings

[](http://jsbin.com/sequx/1/embed?js,console)

### Location

File:
- [`/src/core/observable/window.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/window.js)

Dist:
- [`rx.coincidence.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.coincidence.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Coincidence`](http://www.nuget.org/packages/RxJS-Main/)

Unit Tests:
- [`/tests/observable/window.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/window.js)