## [`Rx.Observable.prototype.elementAt(index)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/elementat.js)

{% if book.isPdf %}

![elementAt](http://reactivex.io/documentation/operators/images/elementAt.png)

{% else %}

<rx-marbles key="elementAt"></rx-marbles>

{% endif %}

Returns the element at a specified index in a sequence.

#### Arguments
1. `index` *(`Function`)*: The zero-based index of the element to retrieve.

#### Returns
*(`Observable`)*: An observable sequence that produces the element at the specified position in the source sequence.

#### Example

##### Finds an index

[](http://jsbin.com/yuviyi/1/embed?js,console)

##### Not found

[](http://jsbin.com/coces/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).aggregates.js

{% endif %}