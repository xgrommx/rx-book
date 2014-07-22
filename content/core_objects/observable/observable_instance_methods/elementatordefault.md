# elementAtOrDefault

`Rx.Observable.prototype.elementAtOrDefault(index, [defaultValue])`
<a href="#rxobservableprototypeelementatordefaultindex-defaultvalue">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.aggregates.js#L489-L491 "View in source") 

Returns the element at a specified index in a sequence.

#### Arguments
1. `index` *(`Function`)*: The zero-based index of the element to retrieve.
2. `[defaultValue = null]` *(`Any`)*: The default value if the index is outside the bounds of the source sequence.

#### Returns
*(`Observable`)*: An observable sequence that produces the element at the specified position in the source sequence, or a default value if the index is outside the bounds of the source sequence.

#### Example

[](http://jsbin.com/towol/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js