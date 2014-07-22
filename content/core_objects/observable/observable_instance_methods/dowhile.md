# doWhile

`Rx.Observable.prototype.doWhile(condition, source)`
<a href="#rxobservableprototypedowhilecondition-source">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L2549-L2559 "View in source") 

Repeats source as long as condition holds emulating a do while loop.

#### Arguments
1. `condition` *(`Function`)*: The condition which determines if the source will be repeated.
2. `source` *(`Function`)*: The observable sequence that will be run if the condition function returns true.

#### Returns
*(`Observable`)*: An observable sequence whose observers trigger an invocation of the given observable factory function.

#### Example

[](http://jsbin.com/tizad/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).experimental.js