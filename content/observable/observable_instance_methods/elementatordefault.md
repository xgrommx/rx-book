## [`Rx.Observable.prototype.elementAtOrDefault(index, [defaultValue])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/elementatordefault.js)

{% if book.isPdf %}

![elementAtOrDefault](http://reactivex.io/documentation/operators/images/elementAtOrDefault.png)

{% else %}



{% endif %}

Returns the element at a specified index in a sequence.

#### Arguments
1. `index` *(`Function`)*: The zero-based index of the element to retrieve.
2. `[defaultValue = null]` *(`Any`)*: The default value if the index is outside the bounds of the source sequence.

#### Returns
*(`Observable`)*: An observable sequence that produces the element at the specified position in the source sequence, or a default value if the index is outside the bounds of the source sequence.

#### Example

[](http://jsbin.com/towol/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js

{% endif %}