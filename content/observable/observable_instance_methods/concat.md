## [`Rx.Observable.prototype.concat(...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/concatproto.js)

{% if book.isPdf %}

![concat](http://reactivex.io/documentation/operators/images/concat.png)

{% else %}

<rx-marbles key="concat"></rx-marbles>

{% endif %}

Concatenates all the observable sequences.  This takes in either an array or variable arguments to concatenate.

#### Arguments
1. `args` *(arguments | Array)*: An array or arguments of Observable sequences.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements of each given sequence, in sequential order. 

#### Example

[](http://jsbin.com/coyapo/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx)

{% endif %}