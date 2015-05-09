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
- [`catch | catchException`](../core_objects/observable/observable_methods/catch.html)
- [`concat`](../core_objects/observable/observable_methods/concat.html)
- [`create | createWithDisposable`](../core_objects/observable/observable_methods/create.html)
- [`defer`](../core_objects/observable/observable_methods/defer.html)
- [`empty`](../core_objects/observable/observable_methods/empty.html)
- [`from`](../core_objects/observable/observable_methods/from.html)
- [`fromArray`](../core_objects/observable/observable_methods/fromarray.html)
- [`fromCallback`](../core_objects/observable/observable_methods/fromcallback.html)
- [`fromEvent`](../core_objects/observable/observable_methods/fromevent.html)
- [`fromEventPattern`](../core_objects/observable/observable_methods/fromeventpattern.html)
- [`fromNodeCallback`](../core_objects/observable/observable_methods/fromnodecallback.html)
- [`fromPromise`](../core_objects/observable/observable_methods/frompromise.html)
- [`interval`](../core_objects/observable/observable_methods/interval.html)
- [`just`](../core_objects/observable/observable_methods/return.html)
- [`merge`](../core_objects/observable/observable_methods/merge.html)
- [`mergeDelayError`](../core_objects/observable/observable_methods/mergedelayerror.html)
- [`never`](../core_objects/observable/observable_methods/never.html)
- [`of`](../core_objects/observable/observable_methods/of.html)
- [`ofWithScheduler`](../core_objects/observable/observable_methods/ofwithscheduler.html)
- [`range`](../core_objects/observable/observable_methods/range.html)
- [`repeat`](../core_objects/observable/observable_methods/repeat.html)
- [`return | returnValue`](../core_objects/observable/observable_methods/return.html)
- [`throw | throwError | throwException`](../core_objects/observable/observable_methods/throw.html)
- [`timer`](../core_objects/observable/observable_methods/timer.html)
- [`zip`](../core_objects/observable/observable_methods/zip.html)
- [`zipArray`](../core_objects/observable/observable_methods/ziparray.html)

### `Observable Instance Methods`
- [`asObservable`](../core_objects/observable/observable_instance_methods/asobservable.html)
- [`catch | catchException`](../core_objects/observable/observable_instance_methods/catch.html)
- [`combineLatest`](../core_objects/observable/observable_instance_methods/combinelatest.html)
- [`concat`](../core_objects/observable/observable_instance_methods/concat.html)
- [`concatMap`](../core_objects/observable/observable_instance_methods/concatmap.html)
- [`connect`](../core_objects/observable/observable_instance_methods/connect.html)
- [`debounce`](../core_objects/observable/observable_instance_methods/debounce.html)
- [`defaultIfEmpty`](../core_objects/observable/observable_instance_methods/defaultifempty.html)
- [`delay`](../core_objects/observable/observable_instance_methods/delay.html)
- [`dematerialize`](../core_objects/observable/observable_instance_methods/dematerialize.html)
- [`distinctUntilChanged`](../core_objects/observable/observable_instance_methods/distinctuntilchanged.html)
- [`do | doAction`](../core_objects/observable/observable_instance_methods/do.html)
- [`doOnNext`](../core_objects/observable/observable_instance_methods/doonnext.html)
- [`doOnError`](../core_objects/observable/observable_instance_methods/doonerror.html)
- [`doOnCompleted`](../core_objects/observable/observable_instance_methods/dooncompleted.html)
- [`filter`](../core_objects/observable/observable_instance_methods/where.html)
- [`finally | finallyAction`](../core_objects/observable/observable_instance_methods/finally.html)
- [`flatMap`](../core_objects/observable/observable_instance_methods/selectmany.html)
- [`flatMapLatest`](../core_objects/observable/observable_instance_methods/flatmaplatest.html)
- [`ignoreElements`](../core_objects/observable/observable_instance_methods/ignoreelements.html)
- [`map`](../core_objects/observable/observable_instance_methods/select.html)
- [`merge`](../core_objects/observable/observable_instance_methods/merge.html)
- [`mergeObservable | mergeAll`](../core_objects/observable/observable_instance_methods/mergeall.html)
- [`multicast`](../core_objects/observable/observable_instance_methods/multicast.html)
- [`publish`](../core_objects/observable/observable_instance_methods/publish.html)
- [`publishLast`](../core_objects/observable/observable_instance_methods/publishlast.html)
- [`publishValue`](../core_objects/observable/observable_instance_methods/publishvalue.html)
- [`refCount`](../core_objects/observable/observable_instance_methods/refcount.html)
- [`repeat`](../core_objects/observable/observable_instance_methods/repeat.html)
- [`replay`](../core_objects/observable/observable_instance_methods/replay.html)
- [`retry`](../core_objects/observable/observable_instance_methods/retry.html)
- [`retryWhen`](../core_objects/observable/observable_instance_methods/retrywhen.html)
- [`sample`](../core_objects/observable/observable_instance_methods/sample.html)
- [`scan`](../core_objects/observable/observable_instance_methods/scan.html)
- [`select`](../core_objects/observable/observable_instance_methods/select.html)
- [`selectConcat`](../core_objects/observable/observable_instance_methods/concatmap.html)
- [`selectMany`](../core_objects/observable/observable_instance_methods/selectmany.html)
- [`selectSwitch`](../core_objects/observable/observable_instance_methods/flatmaplatest.html)
- [`singleInstance`](../core_objects/observable/observable_instance_methods/singleinstance.html)
- [`skip`](../core_objects/observable/observable_instance_methods/skip.html)
- [`skipLast`](../core_objects/observable/observable_instance_methods/skiplast.html)
- [`skipUntil`](../core_objects/observable/observable_instance_methods/skipuntil.html)
- [`skipWhile`](../core_objects/observable/observable_instance_methods/skipwhile.html)
- [`startWith`](../core_objects/observable/observable_instance_methods/startwith.html)
- [`subscribe | forEach`](../core_objects/observable/observable_instance_methods/subscribe.html)
- [`subscribeOnNext`](../core_objects/observable/observable_instance_methods/subscribeonnext.html)
- [`subscribeOnError`](../core_objects/observable/observable_instance_methods/subscribeonerror.html)
- [`subscribeOnCompleted`](../core_objects/observable/observable_instance_methods/subscribeoncompleted.html)
- [`switch | switchLatest`](../core_objects/observable/observable_instance_methods/switch.html)
- [`take`](../core_objects/observable/observable_instance_methods/take.html)
- [`takeLast`](../core_objects/observable/observable_instance_methods/takelast.html)
- [`takeUntil`](../core_objects/observable/observable_instance_methods/takeuntil.html)
- [`takeWhile`](../core_objects/observable/observable_instance_methods/takewhile.html)
- [`tap`](../core_objects/observable/observable_instance_methods/do.html)
- [`tapOnNext`](../core_objects/observable/observable_instance_methods/doonnext.html)
- [`tapOnError`](../core_objects/observable/observable_instance_methods/doonerror.html)
- [`tapOnCompleted`](../core_objects/observable/observable_instance_methods/dooncompleted.html)
- [`throttle`](../core_objects/observable/observable_instance_methods/debounce.html)
- [`throttleFirst`](../core_objects/observable/observable_instance_methods/throttlefirst.html)
- [`timeout`](../core_objects/observable/observable_instance_methods/timeout.html)
- [`timestamp`](../core_objects/observable/observable_instance_methods/timestamp.html)
- [`toArray`](../core_objects/observable/observable_instance_methods/toarray.html)
- [`transduce`](../core_objects/observable/observable_instance_methods/transduce.html)
- [`where`](../core_objects/observable/observable_instance_methods/where.html)
- [`withLatestFrom`](../core_objects/observable/observable_instance_methods/withlatestfrom.html)
- [`zip`](../core_objects/observable/observable_instance_methods/zip.html)

## Included Classes ##

### Core Objects
- [`Rx.Observer`](../core_objects/observer/index.html)
- [`Rx.Notification`](../core_objects/notification/index.html)

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
