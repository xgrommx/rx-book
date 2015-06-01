# expand

`Rx.Observable.prototype.expand(selector, [scheduler])`
<a href="#expand">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.experimental.js#L179-L234 "View in source") 

Expands an observable sequence by recursively invoking selector.

#### Arguments
1. `selector` *(`Function`)*: Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again.
2. `[scheduler=Rx.Scheduler.immediate]` *(`Scheduler`)*: Scheduler on which to perform the expansion. If not provided, this defaults to the immediate scheduler.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate.

#### Example

[](http://jsbin.com/xeyuf/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).experimental.js