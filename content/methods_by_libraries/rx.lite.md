# RxJS Lite Module #

The Reactive Extensions for JavaScript Lite version is a lightweight version of the Reactive Extensions for JavaScript which covers most of the day to day operators you might use all in a single library.  Functionality such as bridging to events, promises, callbacks, Node.js-style callbacks, time-based operations and more are built right in.

This comes with both `rx.lite.js` which is for use in modern development environments such as > IE9 and server-side environments such as Node.js.  We also have `rx.lite.compat.js` which has backwards compatibility to browsers which do not support all required ES5 features.

## Details ##

Files:
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.js)
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Lite`](https://www.nuget.org/packages/RxJS-Lite/)

## Included Observable Operators ##

### `Observable Methods`
- [`catch | catchException`](../observable/observable_methods/catch.html)
- [`concat`](../observable/observable_methods/concat.html)
- [`create | createWithDisposable`](../observable/observable_methods/create.html)
- [`defer`](../observable/observable_methods/defer.html)
- [`empty`](../observable/observable_methods/empty.html)
- [`from`](../observable/observable_methods/from.html)
- [`fromArray`](../observable/observable_methods/fromarray.html)
- [`fromCallback`](../observable/observable_methods/fromcallback.html)
- [`fromEvent`](../observable/observable_methods/fromevent.html)
- [`fromEventPattern`](../observable/observable_methods/fromeventpattern.html)
- [`fromNodeCallback`](../observable/observable_methods/fromnodecallback.html)
- [`fromPromise`](../observable/observable_methods/frompromise.html)
- [`interval`](../observable/observable_methods/interval.html)
- [`just`](../observable/observable_methods/return.html)
- [`merge`](../observable/observable_methods/merge.html)
- [`mergeDelayError`](../observable/observable_methods/mergedelayerror.html)
- [`never`](../observable/observable_methods/never.html)
- [`of`](../observable/observable_methods/of.html)
- [`ofWithScheduler`](../observable/observable_methods/ofwithscheduler.html)
- [`range`](../observable/observable_methods/range.html)
- [`repeat`](../observable/observable_methods/repeat.html)
- [`return | returnValue`](../observable/observable_methods/return.html)
- [`throw | throwError | throwException`](../observable/observable_methods/throw.html)
- [`timer`](../observable/observable_methods/timer.html)
- [`zip`](../observable/observable_methods/zip.html)
- [`zipArray`](../observable/observable_methods/ziparray.html)

### `Observable Instance Methods`
- [`asObservable`](../observable/observable_instance_methods/asobservable.html)
- [`catch | catchException`](../observable/observable_instance_methods/catch.html)
- [`combineLatest`](../observable/observable_instance_methods/combinelatest.html)
- [`concat`](../observable/observable_instance_methods/concat.html)
- [`concatMap`](../observable/observable_instance_methods/concatmap.html)
- [`connect`](../observable/observable_instance_methods/connect.html)
- [`debounce`](../observable/observable_instance_methods/debounce.html)
- [`defaultIfEmpty`](../observable/observable_instance_methods/defaultifempty.html)
- [`delay`](../observable/observable_instance_methods/delay.html)
- [`dematerialize`](../observable/observable_instance_methods/dematerialize.html)
- [`distinctUntilChanged`](../observable/observable_instance_methods/distinctuntilchanged.html)
- [`do | doAction`](../observable/observable_instance_methods/do.html)
- [`doOnNext`](../observable/observable_instance_methods/doonnext.html)
- [`doOnError`](../observable/observable_instance_methods/doonerror.html)
- [`doOnCompleted`](../observable/observable_instance_methods/dooncompleted.html)
- [`filter`](../observable/observable_instance_methods/where.html)
- [`finally | finallyAction`](../observable/observable_instance_methods/finally.html)
- [`flatMap`](../observable/observable_instance_methods/selectmany.html)
- [`flatMapLatest`](../observable/observable_instance_methods/flatmaplatest.html)
- [`ignoreElements`](../observable/observable_instance_methods/ignoreelements.html)
- [`map`](../observable/observable_instance_methods/select.html)
- [`merge`](../observable/observable_instance_methods/merge.html)
- [`mergeObservable | mergeAll`](../observable/observable_instance_methods/mergeall.html)
- [`multicast`](../observable/observable_instance_methods/multicast.html)
- [`publish`](../observable/observable_instance_methods/publish.html)
- [`publishLast`](../observable/observable_instance_methods/publishlast.html)
- [`publishValue`](../observable/observable_instance_methods/publishvalue.html)
- [`refCount`](../observable/observable_instance_methods/refcount.html)
- [`repeat`](../observable/observable_instance_methods/repeat.html)
- [`replay`](../observable/observable_instance_methods/replay.html)
- [`retry`](../observable/observable_instance_methods/retry.html)
- [`retryWhen`](../observable/observable_instance_methods/retrywhen.html)
- [`sample`](../observable/observable_instance_methods/sample.html)
- [`scan`](../observable/observable_instance_methods/scan.html)
- [`select`](../observable/observable_instance_methods/select.html)
- [`selectConcat`](../observable/observable_instance_methods/concatmap.html)
- [`selectMany`](../observable/observable_instance_methods/selectmany.html)
- [`selectSwitch`](../observable/observable_instance_methods/flatmaplatest.html)
- [`singleInstance`](../observable/observable_instance_methods/singleinstance.html)
- [`skip`](../observable/observable_instance_methods/skip.html)
- [`skipLast`](../observable/observable_instance_methods/skiplast.html)
- [`skipUntil`](../observable/observable_instance_methods/skipuntil.html)
- [`skipWhile`](../observable/observable_instance_methods/skipwhile.html)
- [`startWith`](../observable/observable_instance_methods/startwith.html)
- [`subscribe | forEach`](../observable/observable_instance_methods/subscribe.html)
- [`subscribeOnNext`](../observable/observable_instance_methods/subscribeonnext.html)
- [`subscribeOnError`](../observable/observable_instance_methods/subscribeonerror.html)
- [`subscribeOnCompleted`](../observable/observable_instance_methods/subscribeoncompleted.html)
- [`switch | switchLatest`](../observable/observable_instance_methods/switch.html)
- [`take`](../observable/observable_instance_methods/take.html)
- [`takeLast`](../observable/observable_instance_methods/takelast.html)
- [`takeUntil`](../observable/observable_instance_methods/takeuntil.html)
- [`takeWhile`](../observable/observable_instance_methods/takewhile.html)
- [`tap`](../observable/observable_instance_methods/do.html)
- [`tapOnNext`](../observable/observable_instance_methods/doonnext.html)
- [`tapOnError`](../observable/observable_instance_methods/doonerror.html)
- [`tapOnCompleted`](../observable/observable_instance_methods/dooncompleted.html)
- [`throttle`](../observable/observable_instance_methods/debounce.html)
- [`throttleFirst`](../observable/observable_instance_methods/throttlefirst.html)
- [`timeout`](../observable/observable_instance_methods/timeout.html)
- [`timestamp`](../observable/observable_instance_methods/timestamp.html)
- [`toArray`](../observable/observable_instance_methods/toarray.html)
- [`transduce`](../observable/observable_instance_methods/transduce.html)
- [`where`](../observable/observable_instance_methods/where.html)
- [`withLatestFrom`](../observable/observable_instance_methods/withlatestfrom.html)
- [`zip`](../observable/observable_instance_methods/zip.html)

## Included Classes ##

### Core Objects
- [`Rx.Observer`](../observer/index.html)
- [`Rx.Notification`](../notification/index.html)

### Subjects

- [`Rx.AsyncSubject`](../subjects/async_subject/index.html)
- [`Rx.BehaviorSubject`](../subjects/behavior_subject/index.html)
- [`Rx.ReplaySubject`](../subjects/replay_subject/index.html)
- [`Rx.Subject`](../subjects/subject/index.html)

### Schedulers

- [`Rx.Scheduler`](../schedulers/scheduler/index.html)

### Disposables

- [`Rx.CompositeDisposable`](../disposables/composite_disposable/index.html)
- [`Rx.Disposable`](../disposables/disposable/index.html)
- [`Rx.RefCountDisposable`](../disposables/ref_count_disposable/index.html)
- [`Rx.SerialDisposable`](../disposables/serial_disposable/index.html)
- [`Rx.SingleAssignmentDisposable`](../disposables/single_assignment_disposable/index.html)
