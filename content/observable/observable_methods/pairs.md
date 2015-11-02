## [`Rx.Observable.pairs(obj, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/pairs.js)

Convert an object into an observable sequence of [key, value] pairs using an optional `Scheduler` to enumerate the object.

#### Arguments
1. `obj` *(Object)*: The object to inspect and turn into an Observable sequence.
2. `[scheduler]` *(`Scheduler`)*: Scheduler to run the enumeration of the input sequence on. If not specified, defaults to `Rx.Scheduler.currentThread`

#### Returns
*(`Observable`)*: An observable sequence of [key, value] pairs from the object.

#### Example
```js
// Using Standard JavaScript
var obj = {
  foo: 42,
  bar: 56,
  baz: 78
};

var source = Rx.Observable.pairs(obj);

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

// => Next: ['foo', 42]
// => Next: ['bar', 56]
// => Next: ['baz', 78]
// => Completed
  ```

ES6 makes for an even nicer experience such as:
```js
let obj = {
  foo: 42,
  bar: 56,
  baz: 78
};

let source = Rx.Observable.pairs(obj);

let subscription = source.subscribe(
  x => {
    var [key, value] = x;
    console.log('Key:', key, 'Value:', value);
  },
  err => {
    console.log('Error: %s', err);
  },
  => () {
    console.log('Completed');
  });

// => Key: 'foo' Value: 42
// => Key: 'bar' Value: 56
// => Key: 'baz' Value: 78
// => Completed
```