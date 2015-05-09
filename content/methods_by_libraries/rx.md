# RxJS Core Module #

The Reactive Extensions for JavaScript's core functionality is in the main RxJS file which has many core components including the Schedulers, Disposables, Observable and Observer.

This comes with both `rx.js` which is for use in modern development environments such as > IE9 and server-side environments such as Node.js.  We also have `rx.compat.js` which has backwards compatibility to browsers which do not support all required ES5 features.

## Details ##

Files:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)

## Included Observable Operators ##

### `Observable Methods`
- [`amb`](../core_objects/observable/observable_methods/amb.html)
- [`catch | catchException`](../core_objects/observable/observable_methods/catch.html)
- [`concat`](../core_objects/observable/observable_methods/concat.html)
- [`create | createWithDisposable`](../core_objects/observable/observable_methods/create.html)
- [`defer`](../core_objects/observable/observable_methods/defer.html)
- [`empty`](../core_objects/observable/observable_methods/empty.html)
- [`from`](../core_objects/observable/observable_methods/from.html)
- [`fromArray`](../core_objects/observable/observable_methods/fromarray.html)
- [`generate`](../core_objects/observable/observable_methods/generate.html)
- [`just`](../core_objects/observable/observable_methods/return.html)
- [`merge`](../core_objects/observable/observable_methods/merge.html)
- [`mergeDelayError`](../core_objects/observable/observable_methods/mergedelayerror.html)
- [`never`](../core_objects/observable/observable_methods/never.html)
- [`of`](../core_objects/observable/observable_methods/of.html)
- [`ofWithScheduler`](../core_objects/observable/observable_methods/ofwithscheduler.html)
- [`onErrorResumeNext`](../core_objects/observable/observable_methods/onerrorresumenext.html)
- [`range`](../core_objects/observable/observable_methods/range.html)
- [`repeat`](../core_objects/observable/observable_methods/repeat.html)
- [`return | returnValue`](../core_objects/observable/observable_methods/return.html)
- [`throw | throwError | throwException`](../core_objects/observable/observable_methods/throw.html)
- [`zip`](../core_objects/observable/observable_methods/zip.html)
- [`zipArray`](../core_objects/observable/observable_methods/ziparray.html)

### `Observable Instance Methods`
- [`amb`](../core_objects/observable/observable_instance_methods/amb.html)
- [`asObservable`](../core_objects/observable/observable_instance_methods/asobservable.html)
- [`bufferWithCount`](../core_objects/observable/observable_instance_methods/bufferwithcount.html)
- [`catch | catchException`](../core_objects/observable/observable_instance_methods/catch.html)
- [`combineLatest`](../core_objects/observable/observable_instance_methods/combinelatest.html)
- [`concat`](../core_objects/observable/observable_instance_methods/concat.html)
- [`concatMap`](../core_objects/observable/observable_instance_methods/concatmap.html)
- [`defaultIfEmpty`](../core_objects/observable/observable_instance_methods/defaultifempty.html)
- [`distinct`](../core_objects/observable/observable_instance_methods/distinct.html)
- [`distinctUntilChanged`](../core_objects/observable/observable_instance_methods/distinctuntilchanged.html)
- [`do | doAction`](../core_objects/observable/observable_instance_methods/do.html)
- [`doOnNext`](../core_objects/observable/observable_instance_methods/doonnext.html)
- [`doOnError`](../core_objects/observable/observable_instance_methods/doonerror.html)
- [`doOnCompleted`](../core_objects/observable/observable_instance_methods/dooncompleted.html)
- [`filter`](../core_objects/observable/observable_instance_methods/where.html)
- [`finally | finallyAction`](../core_objects/observable/observable_instance_methods/finally.html)
- [`flatMap`](../core_objects/observable/observable_instance_methods/selectmany.html)
- [`flatMapLatest`](../core_objects/observable/observable_instance_methods/flatmaplatest.html)
- [`flatMapObserver`](../core_objects/observable/observable_instance_methods/flatmapobserver.html)
- [`ignoreElements`](../core_objects/observable/observable_instance_methods/ignoreelements.html)
- [`map`](../core_objects/observable/observable_instance_methods/select.html)
- [`merge`](../core_objects/observable/observable_instance_methods/merge.html)
- [`mergeObservable | mergeAll`](../core_objects/observable/observable_instance_methods/mergeall.html)
- [`observeOn`](../core_objects/observable/observable_instance_methods/observeon.html)
- [`onErrorResumeNext`](../core_objects/observable/observable_instance_methods/onerrorresumenext.html)
- [`repeat`](../core_objects/observable/observable_instance_methods/repeat.html)
- [`retry`](../core_objects/observable/observable_instance_methods/retry.html)
- [`retryWhen`](../core_objects/observable/observable_instance_methods/retrywhen.html)
- [`scan`](../core_objects/observable/observable_instance_methods/scan.html)
- [`select`](../core_objects/observable/observable_instance_methods/select.html)
- [`selectConcat`](../core_objects/observable/observable_instance_methods/concatmap.html)
- [`selectMany`](../core_objects/observable/observable_instance_methods/selectmany.html)
- [`selectManyObserver`](../core_objects/observable/observable_instance_methods/flatpmapobserver.html)
- [`selectSwitch`](../core_objects/observable/observable_instance_methods/flatmaplatest.html)
- [`single`](../core_objects/observable/observable_instance_methods/single.html)
- [`singleOrDefault`](../core_objects/observable/observable_instance_methods/singleordefault.html)
- [`skip`](../core_objects/observable/observable_instance_methods/skip.html)
- [`skipLast`](../core_objects/observable/observable_instance_methods/skiplast.html)
- [`skipUntil`](../core_objects/observable/observable_instance_methods/skipuntil.html)
- [`skipWhile`](../core_objects/observable/observable_instance_methods/skipwhile.html)
- [`startWith`](../core_objects/observable/observable_instance_methods/startwith.html)
- [`subscribe | forEach`](../core_objects/observable/observable_instance_methods/subscribe.html)
- [`subscribeOnNext`](../core_objects/observable/observable_instance_methods/subscribeonnext.html)
- [`subscribeOnError`](../core_objects/observable/observable_instance_methods/subscribeonerror.html)
- [`subscribeOnCompleted`](../core_objects/observable/observable_instance_methods/subscribeoncompleted.html)
- [`subscribeOn`](../core_objects/observable/observable_instance_methods/subscribeon.html)
- [`switch | switchLatest`](../core_objects/observable/observable_instance_methods/switch.html)
- [`take`](../core_objects/observable/observable_instance_methods/take.html)
- [`takeLast`](../core_objects/observable/observable_instance_methods/takelast.html)
- [`takeLastBuffer`](../core_objects/observable/observable_instance_methods/takelastbuffer.html)
- [`takeUntil`](../core_objects/observable/observable_instance_methods/takeuntil.html)
- [`takeWhile`](../core_objects/observable/observable_instance_methods/takewhile.html)
- [`toArray`](../core_objects/observable/observable_instance_methods/toarray.html)
- [`transduce`](../core_objects/observable/observable_instance_methods/transduce.html)
- [`where`](../core_objects/observable/observable_instance_methods/where.html)
- [`windowWithCount`](../core_objects/observable/observable_instance_methods/windowwithcount.html)
- [`withLatestFrom`](../core_objects/observable/observable_instance_methods/withlatestfrom.html)
- [`zip`](../core_objects/observable/observable_instance_methods/zip.html)

## Included Classes ##

### Core Objects

- [`Rx.Observer`](../core_objects/observer/index.html)
- [`Rx.Notification`](../core_objects/notification/index.html)

### Subjects

- [`Rx.AsyncSubject`](../subjects/async_subject/index.html)
- [`Rx.Subject`](../subjects/subject/index.html)

### Schedulers

- [`Rx.Scheduler`](../schedulers/scheduler/index.html)

### Disposables

- [`Rx.CompositeDisposable`](../disposables/composite_disposable/index.html)
- [`Rx.Disposable`](../disposables/disposable/index.html)
- [`Rx.RefCountDisposable`](../disposables/ref_count_disposable/index.html)
- [`Rx.SerialDisposable`](../disposables/serial_disposable/index.html)
- [`Rx.SingleAssignmentDisposable`](../disposables/single_assignment_disposable/index.html)
