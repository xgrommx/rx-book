## [`Rx.Observable.prototype.combineLatest(...args, resultSelector)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/combinelatestproto.js)

{% if book.isPdf %}

![combineLatest](http://reactivex.io/documentation/operators/images/combineLatest.png)

{% else %}

<rx-marbles key="combineLatest"></rx-marbles>

{% endif %}

Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences produces an element.  This can be in the form of an argument list of observables or an array.

#### Arguments
1. `args` *(arguments | Array)*: An array or arguments of Observable sequences.
1. `resultSelector` *(`Function`)*: Function to invoke whenever either of the sources produces an element.

#### Returns
*(`Observable`)*: An observable sequence containing the result of combining elements of the sources using the specified result selector function. 

#### Example

[](http://jsbin.com/divopa/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx)

{% endif %}