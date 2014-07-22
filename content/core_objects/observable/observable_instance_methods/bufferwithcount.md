# bufferWithCount

`Rx.Observable.prototype.bufferWithCount(count, [skip])`
<a href="#rxobservableprototypebufferwithcountcount-skip">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L3694-L3703 "View in source") 

Projects each element of an observable sequence into zero or more buffers which are produced based on element count information.

#### Arguments
1. `count` *(`Function`)*: Length of each buffer.
2. `[skip]` *(`Function`)*: Number of elements to skip between creation of consecutive buffers. If not provided, defaults to the count.

#### Returns
*(`Observable`)*: An observable sequence of buffers. 

#### Example

##### Without a skip

[](http://jsbin.com/behad/1/embed?js,console)

##### Using a skip

[](http://jsbin.com/vewabo/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx)