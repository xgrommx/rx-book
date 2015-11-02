## [`Rx.Observable.concat(...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/concat.js)

{% if book.isPdf==true %}

![concat](http://reactivex.io/documentation/operators/images/concat.png)

{% endif %}

Concatenates all of the specified observable sequences, as long as the previous observable sequence terminated successfully.

#### Arguments
1. `args` *(`Array` | `arguments`)*: Observable sequences or Promises to concatenate.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements of each given sequence, in sequential order.

#### Example

{% if book.isPdf %}

##### [Using Observable sequences](http://jsbin.com/sitiko/2/edit?js,console)

```js
/* Using Observable sequences */
var source1 = Rx.Observable.return(42);
var source2 = Rx.Observable.return(56);

var source = Rx.Observable.concat(source1, source2);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 42
// => onNext: 56
// => onCompleted
```

#### [Using Promises and Observable sequences](http://jsbin.com/topor/2/edit?js,console)

```js
/* Using Promises and Observable sequences */
var source1 = Rx.Observable.return(42);
var source2 = RSVP.Promise.resolve(56);

var source = Rx.Observable.concat(source1, source2);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 42
// => onNext: 56
// => onCompleted
```

{% else %}

##### Using Observable sequences

[](http://jsbin.com/sitiko/2/embed?js,console)

#### Using Promises and Observable sequences

[](http://jsbin.com/topor/2/embed?js,console)

{% endif %}

