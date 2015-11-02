## [`Rx.Observable.prototype.includes(searchElement, [fromIndex])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/includes.js)

Determines whether an observable sequence includes a specified element with an optional from index.

#### Arguments
1. `searchElement` *(`Any`)*: The value to locate in the source sequence.
2. `[fromIndex]` *(`Number`)*: The index to start the search.  If not specified, defaults to 0.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether the source sequence includes an element that has the specified value with an optional from index.

#### Example
```js
/* Without an index */
var source = Rx.Observable.of(42)
  .includes(42);

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

// => Next: true
// => Completed

/* With an index */
var source = Rx.Observable.of(1,2,3)
  .includes(2, 1);

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

// => Next: true
// => Completed
```
