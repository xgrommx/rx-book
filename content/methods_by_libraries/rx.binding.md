# RxJS Binding Module #

The Reactive Extensions for JavaScript has a notion of hot and cold observables.  Hot observables fire whether you are listening to them or not, such as mouse movements.  Cold observables on the other hand, such as a sequence created from an array will fire the same sequence to all subscribers.  The Binding module gives you the ability to replay events for hot observables, and to turn cold observables into hot observables.

## Details ##

Files:
- [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.binding.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Binding`](http://www.nuget.org/packages/RxJS-Binding/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

File Dependencies:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

NuGet Dependencies:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)

## Included Observable Operators ##

### `Observable Instance Methods`
- [`connect`](../observable/observable_instance_methods/connect.html)
- [`publish`](../observable/observable_instance_methods/publish.html)
- [`publishLast`](../observable/observable_instance_methods/publishlast.html)
- [`publishValue`](../observable/observable_instance_methods/publishvalue.html)
- [`refCount`](../observable/observable_instance_methods/refcount.html)
- [`replay`](../observable/observable_instance_methods/replay.html)
- [`share`](../observable/observable_instance_methods/share.html)
- [`shareLast`](../observable/observable_instance_methods/sharelast.html)
- [`shareReplay`](../observable/observable_instance_methods/sharereplay.html)
- [`shareValue`](../observable/observable_instance_methods/sharevalue.html)
- [`singleInstance`](../observable/observable_instance_methods/singleinstance.html)

## Included Classes ##

### Subjects

- [`Rx.BehaviorSubject`](../subjects/behavior_subject/index.html)
- [`Rx.ReplaySubject`](../subjects/replay_subject/index.html)
