## [`Rx.Observable.prototype.throttleFirst(windowDuration, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/throttlefirst.js)

Returns an Observable that emits only the first item emitted by the source Observable during sequential time windows of a specified duration.

#### Arguments
1. `windowDuration` *(`Number`)*: Time to wait before emitting another item after emitting the last item (specified as an integer denoting milliseconds).
2. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*:  The Scheduler to use internally to manage the timers that handle timeout for each item. If not provided, defaults to Scheduler.timeout.

#### Returns
*(`Observable`)*: An Observable that performs the throttle operation.

#### Example
```js
var times = [
    { value: 0, time: 100 },
    { value: 1, time: 600 },
    { value: 2, time: 400 },
    { value: 3, time: 900 },
    { value: 4, time: 200 }
];

// Delay each item by time and project value;
var source = Rx.Observable.from(times)
  .flatMap(function (item) {
    return Rx.Observable
      .of(item.value)
      .delay(item.time);
  })
  .throttleFirst(300 /* ms */);

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

// => Next: 0
// => Next: 2
// => Next: 3
// => Completed
```
