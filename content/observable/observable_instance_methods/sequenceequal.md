## [`Rx.Observable.prototype.sequenceEqual(second, [comparer])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/sequenceequal.js)

{% if book.isPdf %}

![sequenceEqual](http://reactivex.io/documentation/operators/images/sequenceEqual.png)

{% else %}

<rx-marbles key="sequenceEqual"></rx-marbles>

{% endif %}

Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.

#### Arguments
1. `second` *(`Observable` | `Promise` | `Array`)*:  Second observable sequence, Promise or array to compare.
2. `[comparer]` *(`Function`)*: Comparer used to compare elements of both sequences.
 
#### Returns
*(`Observable`)*: An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.   

#### Example

[](http://jsbin.com/feyos/1/embed?js,console)
