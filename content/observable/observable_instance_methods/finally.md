# finally | finallyAction

`Rx.Observable.prototype.finally(action)`
<a href="#rxobservableprototypefinallyaction">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L3832-L3846 "View in source") 

Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.  There is an alias called `finallyAction` for browsers <IE9

#### Arguments
1. `predicate` *(`Function`)*: A function to test each source element for a condition;  The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.

#### Returns
*(`Observable`)*: An observable sequence that contains elements from the input sequence that satisfy the condition.  

#### Example

[](http://jsbin.com/woture/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx)