# count

<rx-marbles key="count"></rx-marbles>

`Rx.Observable.prototype.count([predicate])`
<a href="#rxobservableprototypecountpredicate">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js#L214-L220 "View in source") 

Returns an observable sequence containing a value that represents how many elements in the specified observable sequence satisfy a condition if provided, else the count of items.

#### Arguments
1. `[predicate]` *(`Any`)*: A function to test each element for a condition.  The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed

#### Returns
*(`Observable`)*: An observable sequence containing a single element with a number that represents how many elements in the input sequence satisfy the condition in the predicate function if provided, else the count of items in the sequence.

#### Example

##### Without a predicate

[](http://jsbin.com/xubalo/1/embed?js,console)

##### With a predicate

[](http://jsbin.com/vedid/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js