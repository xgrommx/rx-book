# combineLatest

`Rx.Observable.prototype.combineLatest(...args, resultSelector)`
<a href="#rxobservableprototypecombinelatestargs-resultselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L3139-L3147 "View in source") 

Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences produces an element.  This can be in the form of an argument list of observables or an array.

#### Arguments
1. `args` *(arguments | Array)*: An array or arguments of Observable sequences.
1. `resultSelector` *(`Function`)*: Function to invoke whenever either of the sources produces an element.

#### Returns
*(`Observable`)*: An observable sequence containing the result of combining elements of the sources using the specified result selector function. 

#### Example

[](http://jsbin.com/divopa/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx)