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
- [`amb`](../observable/observable_methods/amb.html)
- [`catch | catchException`](../observable/observable_methods/catch.html)
- [`concat`](../observable/observable_methods/concat.html)
- [`create | createWithDisposable`](../observable/observable_methods/create.html)
- [`defer`](../observable/observable_methods/defer.html)
- [`empty`](../observable/observable_methods/empty.html)
- [`from`](../observable/observable_methods/from.html)
- [`fromArray`](../observable/observable_methods/fromarray.html)
- [`generate`](../observable/observable_methods/generate.html)
- [`just`](../observable/observable_methods/return.html)
- [`merge`](../observable/observable_methods/merge.html)
- [`mergeDelayError`](../observable/observable_methods/mergedelayerror.html)
- [`never`](../observable/observable_methods/never.html)
- [`of`](../observable/observable_methods/of.html)
- [`ofWithScheduler`](../observable/observable_methods/ofwithscheduler.html)
- [`onErrorResumeNext`](../observable/observable_methods/onerrorresumenext.html)
- [`range`](../observable/observable_methods/range.html)
- [`repeat`](../observable/observable_methods/repeat.html)
- [`return | returnValue`](../observable/observable_methods/return.html)
- [`throw | throwError | throwException`](../observable/observable_methods/throw.html)
- [`zip`](../observable/observable_methods/zip.html)
- [`zipArray`](../observable/observable_methods/ziparray.html)

### `Observable Instance Methods`
- [`amb`](../observable/observable_instance_methods/amb.html)
- [`asObservable`](../observable/observable_instance_methods/asobservable.html)
- [`bufferWithCount`](../observable/observable_instance_methods/bufferwithcount.html)
- [`catch | catchException`](../observable/observable_instance_methods/catch.html)
- [`combineLatest`](../observable/observable_instance_methods/combinelatest.html)
- [`concat`](../observable/observable_instance_methods/concat.html)
- [`concatMap`](../observable/observable_instance_methods/concatmap.html)
- [`defaultIfEmpty`](../observable/observable_instance_methods/defaultifempty.html)
- [`distinct`](../observable/observable_instance_methods/distinct.html)
- [`distinctUntilChanged`](../observable/observable_instance_methods/distinctuntilchanged.html)
- [`do | doAction`](../observable/observable_instance_methods/do.html)
- [`doOnNext`](../observable/observable_instance_methods/doonnext.html)
- [`doOnError`](../observable/observable_instance_methods/doonerror.html)
- [`doOnCompleted`](../observable/observable_instance_methods/dooncompleted.html)
- [`filter`](../observable/observable_instance_methods/where.html)
- [`finally | finallyAction`](../observable/observable_instance_methods/finally.html)
- [`flatMap`](../observable/observable_instance_methods/selectmany.html)
- [`flatMapLatest`](../observable/observable_instance_methods/flatmaplatest.html)
- [`flatMapObserver`](../observable/observable_instance_methods/flatmapobserver.html)
- [`ignoreElements`](../observable/observable_instance_methods/ignoreelements.html)
- [`map`](../observable/observable_instance_methods/select.html)
- [`merge`](../observable/observable_instance_methods/merge.html)
- [`mergeObservable | mergeAll`](../observable/observable_instance_methods/mergeall.html)
- [`observeOn`](../observable/observable_instance_methods/observeon.html)
- [`onErrorResumeNext`](../observable/observable_instance_methods/onerrorresumenext.html)
- [`repeat`](../observable/observable_instance_methods/repeat.html)
- [`retry`](../observable/observable_instance_methods/retry.html)
- [`retryWhen`](../observable/observable_instance_methods/retrywhen.html)
- [`scan`](../observable/observable_instance_methods/scan.html)
- [`select`](../observable/observable_instance_methods/select.html)
- [`selectConcat`](../observable/observable_instance_methods/concatmap.html)
- [`selectMany`](../observable/observable_instance_methods/selectmany.html)
- [`selectManyObserver`](../observable/observable_instance_methods/flatpmapobserver.html)
- [`selectSwitch`](../observable/observable_instance_methods/flatmaplatest.html)
- [`single`](../observable/observable_instance_methods/single.html)
- [`singleOrDefault`](../observable/observable_instance_methods/singleordefault.html)
- [`skip`](../observable/observable_instance_methods/skip.html)
- [`skipLast`](../observable/observable_instance_methods/skiplast.html)
- [`skipUntil`](../observable/observable_instance_methods/skipuntil.html)
- [`skipWhile`](../observable/observable_instance_methods/skipwhile.html)
- [`startWith`](../observable/observable_instance_methods/startwith.html)
- [`subscribe | forEach`](../observable/observable_instance_methods/subscribe.html)
- [`subscribeOnNext`](../observable/observable_instance_methods/subscribeonnext.html)
- [`subscribeOnError`](../observable/observable_instance_methods/subscribeonerror.html)
- [`subscribeOnCompleted`](../observable/observable_instance_methods/subscribeoncompleted.html)
- [`subscribeOn`](../observable/observable_instance_methods/subscribeon.html)
- [`switch | switchLatest`](../observable/observable_instance_methods/switch.html)
- [`take`](../observable/observable_instance_methods/take.html)
- [`takeLast`](../observable/observable_instance_methods/takelast.html)
- [`takeLastBuffer`](../observable/observable_instance_methods/takelastbuffer.html)
- [`takeUntil`](../observable/observable_instance_methods/takeuntil.html)
- [`takeWhile`](../observable/observable_instance_methods/takewhile.html)
- [`toArray`](../observable/observable_instance_methods/toarray.html)
- [`transduce`](../observable/observable_instance_methods/transduce.html)
- [`where`](../observable/observable_instance_methods/where.html)
- [`windowWithCount`](../observable/observable_instance_methods/windowwithcount.html)
- [`withLatestFrom`](../observable/observable_instance_methods/withlatestfrom.html)
- [`zip`](../observable/observable_instance_methods/zip.html)

## Included Classes ##

### Core Objects

- [`Rx.Observer`](../observer/index.html)
- [`Rx.Notification`](../notification/index.html)

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
