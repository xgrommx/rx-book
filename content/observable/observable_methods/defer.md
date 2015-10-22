## [`Rx.Observable.defer(observableFactory)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/defer.js)

{% if book.isPdf %}

![defer](http://reactivex.io/documentation/operators/images/defer.png)

{% else %}



{% endif %}

Returns an observable sequence that invokes the specified factory function whenever a new observer subscribes.

#### Arguments
1. `observableFactory` *(`Function`)*: Observable factory function to invoke for each observer that subscribes to the resulting sequence.

#### Returns
*(`Observable`)*: An observable sequence whose observers trigger an invocation of the given observable factory function.

#### Example

{% if book.isPdf %}

##### [Using an observable sequence](http://jsbin.com/vigitu/2/edit?js,console)

```js
/* Using an observable sequence */
var source = Rx.Observable.defer(() => Rx.Observable.return(42));

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 42
// => onCompleted
```

##### [Using a promise](http://jsbin.com/memuf/2/edit?js,console)

```js
/* Using a promise */
var source = Rx.Observable.defer(() => RSVP.Promise.resolve(42));

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 42
// => onCompleted
```

{% else %}

##### Using an observable sequence

[](http://jsbin.com/vigitu/2/embed?js,console)

##### Using a promise

[](http://jsbin.com/memuf/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/defer.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/defer.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.all.compat.js)
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- None

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Complete`](http://www.nuget.org/packages/RxJS-Complete)
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/defer.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/defer.js)

{% endif %}

