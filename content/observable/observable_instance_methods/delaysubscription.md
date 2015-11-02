## [`Rx.Observable.prototype.delaySubscription(dueTime, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/delaysubscription.js)

Time shifts the observable sequence by delaying the subscription with the specified relative time duration, using the specified scheduler to run timers.

This operator is more efficient than `delay` but postpones all side-effects of subscription and affects error propagation timing.

The side-effects of subscribing to the source sequence will be run on the specified scheduler. Observer callbacks will not be affected.

#### Arguments
1. `dueTime` *(`Number | Date`)*: Relative (Number) or Absolute (Date) time shift of the subscription.
2. `[scheduler]` *(`Scheduler`)*: Scheduler to run the subscription delay timer on. If not specified, the default scheduler is used.

#### Returns
*(`Observable`)*: Time-shifted sequence.

#### Example
```js
var start = Date.now()

var source = Rx.Observable
  .range(0, 3)
  .delaySubscription(5000);

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s, %s', x, Date.now() - start);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });

//=> Next: 0, 5001
//=> Next: 1, 5002
//=> Next: 2, 5003
//=> Completed
```
