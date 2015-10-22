## [`Rx.Observable.prototype.retry([retryCount])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/retry.js)

{% if book.isPdf %}

![retry](http://reactivex.io/documentation/operators/images/retry.png)

{% else %}



{% endif %}

Projects each element of an observable sequence into a new form by incorporating the element's index.  This is an alias for the `select` method.

#### Arguments
1. `[retryCount]` *(`Number`)*:  Number of times to retry the sequence. If not provided, retry the sequence indefinitely.
 
#### Returns
*(`Observable`)*: An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully. 

#### Example

[](http://jsbin.com/hixenu/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/retry.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/retry.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/retry.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/retry.js)

{% endif %}