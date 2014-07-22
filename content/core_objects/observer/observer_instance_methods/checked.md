# checked

`Rx.Observer.prototype.checked()`
<a href="#rxobserverprototypechecked">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js#L2862-L2872 "View in source") [&#x24C9;][1]

Checks access to the observer for grammar violations. This includes checking for multiple `onError` or `onCompleted` calls, as well as reentrancy in any of the observer methods.

If a violation is detected, an Error is thrown from the offending observer method call.

#### Returns
*(Observer)*: An observer that checks callbacks invocations against the observer grammar and, if the checks pass, forwards those to the specified observer.
 
#### Example

[](http://jsbin.com/vikam/1/embed?js,console)

### Location

- rx.js