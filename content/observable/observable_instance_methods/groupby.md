# groupBy

`Rx.Observable.prototype.groupBy(keySelector, [elementSelector], [keySerializer])`
<a href="#rxobservableprototypegroupbykeyselector-elementselector-keyserializer">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L4187-L4191 "View in source") 

Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.

#### Arguments
1. `keySelector` *(`Function`)*: A function to extract the key for each element.
2. `[elementSelector]` *(`Function`)*: A function to map each source element to an element in an observable group.
3. `[keySerializer]` *(`Any`)*: Used to serialize the given object into a string for object comparison.

#### Returns
*(`Observable`)*: A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.    

#### Example

[](http://jsbin.com/yijuy/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx)