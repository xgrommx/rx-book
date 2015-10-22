## [`Rx.Observable.from(iterable, [mapFn], [thisArg], [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/from.js)

{% if book.isPdf %}

![from](http://reactivex.io/documentation/operators/images/from.png)

{% else %}


{% endif %}

This method creates a new Observable sequence from an array-like or iterable object.

#### Arguments
1. `iterable` *(`Array` | `Arguments` | `Iterable`)*: An array-like or iterable object to convert to an Observable sequence.
2. `[mapFn]` *(`Function`)*: Map function to call on every element of the array.
3. `[thisArg]` *(`Any`)*: The context to use calling the mapFn if provided.
4. `[scheduler=Rx.Scheduler.currentThread]` *(`Scheduler`)*: Scheduler to run the enumeration of the input sequence on.

#### Returns
*(`Observable`)*: The observable sequence whose elements are pulled from the given iterable sequence.

#### Example

{% if book.isPdf %}

##### [Array-like object (arguments) to Observable](http://jsbin.com/dekire/2/edit?js,console)

```js
function f() {
  return Rx.Observable.from(arguments);
}

f(1, 2, 3).subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onCompleted
```

##### [Set](http://jsbin.com/dapoju/4/edit?js,console)

```js
var s = new Set(["foo", window]);

Rx.Observable.from(s).subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: foo
// => onNext: window
// => onCompleted
```

##### [Map](http://jsbin.com/yukiyu/4/edit?js,console)

```js
var m = new Map([[1, 2], [2, 4], [4, 8]]);

Rx.Observable.from(m).subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: [1, 2]
// => onNext: [2, 4]
// => onNext: [4, 8]
// => onCompleted
```

##### [String](http://jsbin.com/bemuqa/3/edit?js,console)

```js
Rx.Observable.from("foo").subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: f
// => onNext: o
// => onNext: o
// => onCompleted
```

##### [Array](http://jsbin.com/tiluno/2/edit?js,console)

```js
Rx.Observable.from([1, 2, 3], x => x + x).subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 2
// => onNext: 4
// => onNext: 6
// => onCompleted
```

##### [Generate a sequence of numbers](http://jsbin.com/piyehe/2/edit?js,console)

```js
Rx.Observable.from({length: 5}, (v, k) => k).subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 0
// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onNext: 4
// => onCompleted
```

{% else %}

##### Array-like object (arguments) to Observable

[](http://jsbin.com/dekire/2/embed?js,console)

##### Set

[](http://jsbin.com/dapoju/4/embed?js,console)

##### Map

[](http://jsbin.com/yukiyu/4/embed?js,console)

##### String

[](http://jsbin.com/bemuqa/3/embed?js,console)

##### Array

[](http://jsbin.com/tiluno/2/embed?js,console)

##### Generate a sequence of numbers

[](http://jsbin.com/piyehe/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/linq/observable/from.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/from.js)

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
- [`/tests/observable/from.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/from.js)

{% endif %}
