## [`Rx.Observable.mergeDelayError(...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/mergedelayerror.js)

Flattens an Observable that emits Observables into one Observable, in a way that allows an Observer to
receive all successfully emitted items from all of the source Observables without being interrupted by
an error notification from one of them.

This behaves like `Observable.prototype.mergeAll` except that if any of the merged Observables notify of an
error via the Observer's `onError`, `mergeDelayError` will refrain from propagating that
error notification until all of the merged Observables have finished emitting items.

#### Arguments
1. `args` *(Array|arguments)*: Arguments or an array of Observable sequences to merge.

#### Returns
*(`Observable`)*: An Observable that emits all of the items emitted by the Observables emitted by the Observable

#### Example
```js
var source1 = Rx.Observable.of(1,2,3);
var source2 = Rx.Observable.throwError(new Error('woops'));
var source3 = Rx.Observable.of(4,5,6);

var source = Rx.Observable.mergeDelayError(source1, source2, source3);

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

// => 1
// => 2
// => 3
// => 4
// => 5
// => 6
// => Error: Error: woops
```
