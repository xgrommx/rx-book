## [`Rx.Observable.prototype.flatMapLatest(selector, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/selectswitch.js)

{% if book.isPdf %}

![flatMapLatest](http://reactivex.io/documentation/operators/images/flatMapLatest.png)

{% else %}



{% endif %}

Transform the items emitted by an Observable into Observables, and mirror those items emitted by the most-recently transformed Observable.

The `flatMapLatest` operator is similar to the `flatMap` and `concatMap` methods described above, however, rather than emitting all of the items emitted by all of the Observables that the operator generates by transforming items from the source `Observable`, `switchMap` instead emits items from each such transformed `Observable` only until the next such `Observable` is emitted, then it ignores the previous one and begins emitting items emitted by the new one.

#### Arguments
1. `selector` *(`Function`)*:  A transform function to apply to each source element.  The callback has the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.

#### Returns
*(`Observable`)*: An observable sequence which transforms the items emitted by an Observable into Observables, and mirror those items emitted by the most-recently transformed Observable.

#### Example
```js
var source = Rx.Observable
  .range(1, 3)
  .flatMapLatest(function(x) {
    return Rx.Observable.from([x + 'a', x + 'b']);
  });

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

// Next: 1a
// Next: 2a
// Next: 3a
// Next: 3b
// Completed
```