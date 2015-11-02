## [`Rx.Observable.onErrorResumeNext(...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/onerrorresumenext.js)

{% if book.isPdf %}

![onErrorResumeNext](http://reactivex.io/documentation/operators/images/onErrorResumeNext.png)

{% else %}



{% endif %}

Continues an observable sequence that is terminated normally or by an exception with the next observable sequence or Promise.

### Arguments
1. `args` *(Array|arguments)*: Observable sequences to concatenate.

#### Returns
*(`Observable`)*: An observable sequence that concatenates the source sequences, even if a sequence terminates exceptionally. 

#### Example

[](http://jsbin.com/zewox/1/embed?js,console)
