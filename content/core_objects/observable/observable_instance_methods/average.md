# average

`Rx.Observable.prototype.average([selector])`
<a href="#rxobservableprototypeaverageselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js#L313-L327 "View in source") 

Computes the average of an observable sequence of values that are in the sequence or obtained by invoking a transform function on each element of the input sequence if present.

#### Arguments
1. `[selector]` *(`Function`)*: A transform function to apply to each element.

#### Returns
*(`Observable`)*: An observable sequence containing a single element with the average of the sequence of values.

#### Example

##### Without a selector

[](http://jsbin.com/larut/1/embed?js,console)

##### With a selector

[](http://jsbin.com/zenif/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx)