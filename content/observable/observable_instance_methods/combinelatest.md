## [`Rx.Observable.prototype.combineLatest(...args, [resultSelector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/combinelatestproto.js)

{% if book.isPdf %}

![combineLatest](http://reactivex.io/documentation/operators/images/combineLatest.png)

{% else %}

<rx-marbles key="combineLatest"></rx-marbles>

{% endif %}

Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences produces an element. This can be in the form of an argument list of observables or an array. If the result selector is omitted, a list with the elements will be yielded.

#### Arguments
1. `args` *(arguments | Array)*: An array or arguments of Observable sequences.
1. `[resultSelector]` *(`Function`)*: Function to invoke whenever either of the sources produces an element. If omitted, a list with the elements will be yielded.

#### Returns
*(`Observable`)*: An observable sequence containing the result of combining elements of the sources using the specified result selector function. 

#### Examples

{% if book.isPdf %}

##### [Example](http://jsbin.com/divopa/1/embed?js,console)

```js
var source1 = Rx.Observable.interval(100)
  .map(function (i) { return 'First: ' + i; });

var source2 = Rx.Observable.interval(150)
  .map(function (i) { return 'Second: ' + i; });

// Combine latest of source1 and source2 whenever either gives a value with selector
var source = source1.combineLatest(
    source2
  ).take(4);

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

// => Next: First: 0,Second: 0
// => Next: First: 1,Second: 0
// => Next: First: 1,Second: 1
// => Next: First: 2,Second: 1
// => Completed
```

{% else %}

##### Example

[](http://jsbin.com/divopa/1/embed?js,console)

{% endif %}

{% if book.isPdf %}

##### [Example](http://jsbin.com/divopa/1/embed?js,console)

```js
var source1 = Rx.Observable.interval(100)
  .map(function (i) { return 'First: ' + i; });

var source2 = Rx.Observable.interval(150)
  .map(function (i) { return 'Second: ' + i; });

// Combine latest of source1 and source2 whenever either gives a value
var source = source1.combineLatest(
    source2,
    function (s1, s2) { return s1 + ', ' + s2; }
  ).take(4);

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
```

{% else %}

##### Example

[](http://jsbin.com/divopa/1/embed?js,console)

{% endif %}