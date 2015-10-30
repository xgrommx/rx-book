## [`Rx.Observable.catch(...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/catch.js)

{% if book.isPdf==true %}

![catch](http://reactivex.io/documentation/operators/images/Catch.png)

{% endif %}

Continues an observable sequence that is terminated by an exception with the next observable sequence.

#### Arguments
1. `args` *(`Array` | `arguments`)*: Observable sequences to catch exceptions for.

#### Returns
*(`Observable`)*: An observable sequence containing elements from consecutive source sequences until a source sequence terminates successfully.

{% if book.isPdf %}

#### [Example](http://jsbin.com/qagidu/2/edit?js,console)

```js
var obs1 = Rx.Observable.throw(new Error('error'));
var obs2 = Rx.Observable.return(42);

var source = Rx.Observable.catch(obs1, obs2);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 42
// => onCompleted
```

{% else %}

#### Example
[](http://jsbin.com/qagidu/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/catch.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/catch.js)

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
- [`/tests/observable/catchexceptionproto.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/catchexceptionproto.js)

{% endif %}