# distinct

<rx-marbles key="distinct"></rx-marbles>

`Rx.Observable.prototype.distinct([keySelector], [keySerializer])`
<a href="#rxobservableprototypedistinctkeyselector-keyserializer">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L4144-L4171 "View in source") 

Returns an observable sequence that contains only distinct elements according to the keySelector and the comparer. Usage of this operator should be considered carefully due to the maintenance of an internal lookup structure which can grow large. 

#### Arguments
1. `[keySelector]` *(`Function`)*: A function to compute the comparison key for each element.
2. `[keySerializer]` *(`Function`)*: Used to serialize the given object into a string for object comparison.

#### Returns
*(`Observable`)*: An observable sequence only containing the distinct elements, based on a computed key value, from the source sequence.

#### Example

##### Without key selector

[](http://jsbin.com/feceye/1/embed?js,console)

##### With key selector

[](http://jsbin.com/ducib/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx)