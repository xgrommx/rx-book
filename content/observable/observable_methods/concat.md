# concat
`Rx.Observable.concat(...args)`
<a href="#rxobservableconcatargs">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/concat.js "View in source") 

Concatenates all of the specified observable sequences, as long as the previous observable sequence terminated successfully.

![concat](https://github.com/Netflix/RxJava/wiki/images/rx-operators/concat.png)

#### Arguments
1. `args` *(`Array` | `arguments`)*: Observable sequences or Promises to concatenate.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements of each given sequence, in sequential order.

#### Example

##### Using Observable sequences

[](http://jsbin.com/sitiko/1/embed?js,console)

#### Using Promises and Observable sequences

[](http://jsbin.com/topor/1/embed?js,console)

### Location

File:
- [`/src/core/observable/concat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/concat.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.compat.js)
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
- [`/tests/observable/concatproto.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/concatproto.js)
