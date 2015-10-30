## [`Rx.Observable.forkJoin(...args [resultSelector])`]()

{% if book.isPdf %}

![forkJoin](http://reactivex.io/documentation/operators/images/forkJoin.png)

{% else %}


{% endif %}

Runs all observable sequences in parallel and collect their last elements.

#### Arguments
1. `args` *(`Arguments` | `Array`)*: An array or arguments of Observable sequences or Promises to collect the last elements for.
2. `resultSelector`: *(`Function`)* - The result selector from all the values produced. If not specified, `forkJoin` will return the results as an array.

#### Returns
*(`Observable`)*: An observable sequence with an array collecting the last elements of all the input sequences or the result of the result selector if specified.

{% if book.isPdf %}

#### [Example](http://jsbin.com/sudura/2/edit?js,console)

```js
/* Using observables and Promises */
var source = Rx.Observable.forkJoin(
    Rx.Observable.return(42),
    Rx.Observable.range(0, 10),
    Rx.Observable.fromArray([1,2,3]),
    RSVP.Promise.resolve(56)
);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: [42, 9, 3, 56]
// => onCompleted
```

{% else %}

#### Example

[](http://jsbin.com/sudura/2/embed?js,console)

{% endif %}

{% if book.isPdf %}

#### [Example]()

```js
var source = Rx.Observable.forkJoin(
  Rx.Observable.just(42),
  Rx.Observable.just(56),
  function (x, y) { return x + y; }
);

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });

// => Next: 98
// => Completed
```

{% else %}

#### Example

[](http://jsbin.com/sudura/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/forkjoin.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/forkjoin.js)

Dist:
- [`rx.all.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.all.js)
- [`rx.all.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.all.compat.js)
- [`rx.experimental.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.experimental.js)

Prerequisites:
- If using `rx.experimental.js` - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Complete`](http://www.nuget.org/packages/RxJS-Complete)
- [`RxJS-Experimental`](http://www.nuget.org/packages/RxJS-Experimental)

Unit Tests:
- [`/tests/observable/forkjoin.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/forkjoin.js)

{% endif %}
