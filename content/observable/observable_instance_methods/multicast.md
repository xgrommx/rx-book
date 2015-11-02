## [`Rx.Observable.prototype.multicast(subject | subjectSelector, [selector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/multicast.js)

{% if book.isPdf %}



{% else %}



{% endif %}

Multicasts the source sequence notifications through an instantiated subject into all uses of the sequence within a selector function. Each
subscription to the resulting sequence causes a separate multicast invocation, exposing the sequence resulting from the selector function's
invocation. For specializations with fixed subject types, see `publish`, `share`, `publishValue`, `shareValue`, `publishLast`, `replay`, and `shareReplay`.

#### Arguments
1. `subjectSelector` *(`Function`)*:  Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function.
1. `subject` *(Subject)*: Subject to push source elements into.
2. `[selector]` *(`Function`)*: Optional selector function which can use the multicasted source sequence subject to the policies enforced by the created subject. Specified only if `subjectSelector` is provided.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
 
#### Example

[](http://jsbin.com/javay/1/embed?js,console)
