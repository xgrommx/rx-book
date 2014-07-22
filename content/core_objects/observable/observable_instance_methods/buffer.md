# buffer

`Rx.Observable.prototype.buffer([bufferOpenings], [bufferBoundaries], [bufferClosingSelector])`
<a href="#rxobservableprototypebufferbufferopenings-bufferboundaries-bufferclosingselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.coincidence.js#L572-L585 "View in source") 

Projects each element of an observable sequence into zero or more buffers.

```js
// With buffer closing selector
Rx.Observable.prototype.buffer(bufferClosingSelector);

// With buffer opening and window closing selector
Rx.Observable.prototype.buffer(bufferOpenings, bufferClosingSelector);

// With buffer boundaries
Rx.Observable.prototype.buffer(bufferBoundaries);
```

#### Arguments
1. `[bufferOpenings]` *(`Observable`)*: Observable sequence whose elements denote the creation of new windows.
2. `[bufferBoundaries] *(`Observable`)*: Sequence of buffer boundary markers. The current buffer is closed and a new buffer is opened upon receiving a boundary marker.
2. `[bufferClosingSelector]` *(`Function`)*: A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.

#### Returns
*(`Observable`)*: An observable sequence of windows. 

#### Example

##### Using buffer boundaries

[](http://jsbin.com/pivik/1/embed?js,console)

##### Using a buffer closing selector

[](http://jsbin.com/xijoba/1/embed?js,console)

##### Using Openings and Closing Selector

[](http://jsbin.com/tomav/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).coincidence.js