# groupByUntil

`Rx.Observable.prototype.groupByUntil(keySelector, [elementSelector], durationSelector, [keySerializer])`
<a href="#rxobservableprototypegroupbyuntilkeyselector-elementselector-durationselector-keyserializer">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L4212-L4301 "View in source") 

Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.

#### Arguments
1. `keySelector` *(`Function`)*: A function to extract the key for each element.
2. `[elementSelector]` *(`Function`)*: A function to map each source element to an element in an observable group.
3. `durationSelector` *(`Function`)*: A function to signal the expiration of a group.
4. `[keySerializer]` *(`Any`)*: Used to serialize the given object into a string for object comparison.

#### Returns
*(`Observable`)*: A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.  

If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.

#### Example

[](http://jsbin.com/fohafa/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx)