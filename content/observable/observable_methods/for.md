## [`Rx.Observable.for(sources, resultSelector, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/for.js)

{% if book.isPdf %}

![for](http://reactivex.io/documentation/operators/images/for.png)

{% else %}


{% endif %}

Concatenates the observable sequences or Promises obtained by running the specified result selector for each element in source.
There is an alias for this method called `forIn` for browsers <IE9

#### Arguments
1. `sources` *(Array)*: An array of values to turn into an observable sequence.
2. `resultSelector` *(`Function`)*: A function to apply to each item in the sources array to turn it into an observable sequence. The resultSelector is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed

3. `[thisArg]` *(`Any`)*: Object to use as `this` when executing `resultSelector`.

#### Returns
*(`Observable`)*: An observable sequence from the concatenated observable sequences or Promises.

#### Example

{% if book.isPdf %}

##### [Using Observables](http://jsbin.com/bocec/2/edit?js,console)

```js
/* Using Observables */
var array = [1, 2, 3];

var source = Rx.Observable.for(
    array,
    x => Rx.Observable.returnValue(x)
);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onCompleted
```

##### [Using Promises](http://jsbin.com/febuc/2/edit?js,console)

```js
/* Using Promises */
var array = [1, 2, 3];

var source = Rx.Observable.for(
    array,
    x => RSVP.Promise.resolve(x)
);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onCompleted
```

{% else %}

##### Using Observables

[](http://jsbin.com/bocec/2/embed?js,console)

##### Using Promises

[](http://jsbin.com/febuc/2/embed?js,console)

{% endif %}
