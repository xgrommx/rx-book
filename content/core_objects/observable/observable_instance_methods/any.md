# any

`Rx.Observable.prototype.any([predicate], [thisArg])`
<a href="#rxobservableprototypeanypredicate-thisarg">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js#L144-L157 "View in source") 

Determines whether any element of an observable sequence satisfies a condition if present, else if any items are in the sequence. There is an alias to this function called `some`.

#### Arguments
1. `[predicate]` *(`Function`)*: A function to test each element for a condition.
2. `[thisArg]` *(`Any`)*: Object to use as this when executing callback.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate. 

#### Example

##### Without a predicate

[](http://jsbin.com/xifup/1/embed?js,console)

##### With a predicate

[](http://jsbin.com/qaney/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js