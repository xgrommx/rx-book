## [`Rx.Observable.prototype.delay(dueTime, [scheduler])`, `Rx.Observable.prototype.delay([subscriptionDelay], delayDurationSelector)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/delay.js)

{% if book.isPdf %}

![delay](http://reactivex.io/documentation/operators/images/delay.png)

{% else %}

<rx-marbles key="delay"></rx-marbles>

{% endif %}


Time shifts the observable sequence by dueTime. The relative time intervals between the values are preserved.

--OR--

Time shifts the observable sequence based on a subscription delay and a delay selector function for each element.

#### Arguments

For delays with an absolute or relative time:
1. `dueTime` *(Date | Number)*: Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
2. `[scheduler]` *(`Scheduler`)*: Scheduler to run the delay timers on. If not specified, the default scheduler is used.

For delays with a delay selector function:
1. `[subscriptionDelay]` *(`Observable`)*: Sequence indicating the delay for the subscription to the source.
2. `delayDurationSelector` *(`Function`)*: Selector function to retrieve a sequence indicating the delay for each given element.

#### Returns
*(`Observable`)*: Time-shifted sequence.
  
#### Example

##### Using an absolute time to delay by a second

[](http://jsbin.com/hulit/1/embed?js,console)

##### Using an relatove time to delay by a second

[](http://jsbin.com/haziv/1/embed?js,console)

```js
/* With subscriptionDelay */
var source = Rx.Observable
  .range(0, 3)
  .delay(
    Rx.Observable.timer(300),
    function (x) { return Rx.Observable.timer(x * 400); }
  )
  .timeInterval()
  .map(function (x) { return x.value + ':' + x.interval; });

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


// => Next: 0:300
// => Next: 1:400
// => Next: 2:400
// => Completed
```

```js
/* Without subscriptionDelay */
var source = Rx.Observable
  .range(0, 3)
  .delay(function (x) { return Rx.Observable.timer(x * 400); })
  .timeInterval()
  .map(function (x) { return x.value + ':' + x.interval; });

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

// => Next: 0:0
// => Next: 1:400
// => Next: 2:400
// => Completed
```