## [`Rx.Observable.startAsync(functionAsync)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/startasync.js)

{% if book.isPdf %}

![startAsync](http://reactivex.io/documentation/operators/images/startAsync.png)

{% else %}



{% endif %}

Invokes the asynchronous function, surfacing the result through an observable sequence.

### Arguments
1. `functionAsync` *(`Function`)*: Asynchronous function which returns a Promise to run.

#### Returns
*(`Observable`)*: An observable sequence exposing the function's Promises's value or error.

#### Example

[](http://jsbin.com/jucoh/1/embed?js,console)
