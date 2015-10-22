## [`Rx.Observable.prototype.sample(interval | sampleObservable)`, `Rx.Observable.prototype.throttleLatest(interval | sampleObservable)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/sample.js)

{% if book.isPdf %}

![sample](http://reactivex.io/documentation/operators/images/sample.png)

{% else %}

<rx-marbles key="sample"></rx-marbles>

{% endif %}

Samples the observable sequence at each interval.

#### Arguments
1. `[interval]` *(`Number`)*: Interval at which to sample (specified as an integer denoting milliseconds)
2. `[sampleObservable]` *(`Observable`)*: Sampler Observable.
3. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
 
#### Returns
*(`Observable`)*: Sampled observable sequence.

#### Example

##### With an interval time

[](http://jsbin.com/makeri/1/embed?js,console)

##### With a sampler

[](http://jsbin.com/bezex/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/sample.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/sample.js)

Dist:
- [`rx.time.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using `rx.time.js`
    - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/sample.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/sample.js)

{% endif %}