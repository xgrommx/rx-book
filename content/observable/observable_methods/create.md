## [`Rx.Observable.create(subscribe)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/create.js)

{% if book.isPdf==true %}

![create](https://github.com/Netflix/RxJava/wiki/images/rx-operators/create.png)

{% endif %}

Creates an observable sequence from a specified subscribe method implementation.  This is an alias for the `createWithDisposable` method

#### Arguments
1. `subscribe` *(`Function`)*: Implementation of the resulting observable sequence's subscribe method, optionally returning a function that will be wrapped in a disposable object.  This could also be a disposable object.

#### Returns
*(`Observable`)*: The observable sequence with the specified implementation for the subscribe method.

#### Example

{% if book.isPdf %}

##### [Using a function](http://jsbin.com/luweq/2/edit?js,console)

```js
/* Using a function */
var source = Rx.Observable.create(observer => {
    observer.onNext(42);
    observer.onCompleted();

    // Note that this is optional, you do not have to return this if you require no cleanup
    return () => console.log('disposed')
});

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 42
// => onCompleted

subscription.dispose();

// => disposed
```

##### [Using a disposable](http://jsbin.com/puveyi/2/edit?js,console)

```js
/* Using a disposable */
var source = Rx.Observable.create(observer => {
    observer.onNext(42);
    observer.onCompleted();

    // Note that this is optional, you do not have to return this if you require no cleanup
    return Rx.Disposable.create(() => console.log('disposed'));
});

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 42
// => onCompleted
```

{% else %}

##### Using a function

[](http://jsbin.com/luweq/2/embed?js,console)

##### Using a disposable

[](http://jsbin.com/puveyi/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/create.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/create.js)

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
- [`/tests/observable/create.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/create.js)
- [`/tests/observable/createwithdisposable.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/createwithdisposable.js)

{% endif %}