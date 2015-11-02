## [`Rx.Observable.prototype.debounce(dueTime, [scheduler])`, `Rx.Observable.prototype.throttle(dueTime, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/debounce.js "View in source")

Emits an item from the source Observable after a particular timespan has passed without the Observable omitting any other items.

--OR--

Ignores values from an observable sequence which are followed by another value within a computed debounced duration.

#### Arguments

If using a relative due time:
1. `dueTime` *(`Number`)*: Duration of the throttle period for each value (specified as an integer denoting milliseconds).
2. `[scheduler]` *(`Any`)*: Scheduler to run the throttle timers on. If not specified, the default scheduler is used.

If using the duration selector function:
1. `durationSelector` *(`Function`)*: Selector function to retrieve a sequence indicating the throttle duration for each given element.

#### Returns
*(`Observable`)*: The debounced sequence.

#### Example
```js
var times = [
    { value: 0, time: 100 },
    { value: 1, time: 600 },
    { value: 2, time: 400 },
    { value: 3, time: 700 },
    { value: 4, time: 200 }
];

// Delay each item by time and project value;
var source = Rx.Observable.from(times)
  .flatMap(function (item) {
    return Rx.Observable
      .of(item.value)
      .delay(item.time);
  })
  .debounce(500 /* ms */);

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

// => Next: 3
// => Completed
```

```js
/* Using Selector */
var array = [
  800,
  700,
  600,
  500
];

var source = Rx.Observable.for(
    array,
    function (x) { return Rx.Observable.timer(x) }
  )
  .map(function(x, i) { return i; })
  .debounce(function (x) { return Rx.Observable.timer(700); });

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
// => Next: 3
// => Completed
```
