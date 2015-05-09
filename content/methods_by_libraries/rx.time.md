# RxJS Time Module #

The Reactive Extensions for JavaScript, as it is a library that deals with events over time, naturally has a large number of operators that allow the creation of sequences at given timers, in addition to capturing time stamp and time interval information.  In addition, you can also check for timeouts on your operations.  This also supports windows and buffers with time.

## Details ##

Files:
- [`rx.time.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.time.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Time`](http://www.nuget.org/packages/RxJS-Time/)

File Dependencies:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.compat.js)

NuGet Dependencies:
- [`RxJS-All`](http://www.nuget.org/packages/RxJS-All/)
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

## Included Observable Operators ##

### `Observable Methods`
- [`generateWithAbsoluteTime`](../core_objects/observable/observable_methods/generatewithabsolutetime.html)
- [`generateWithRelativeTime`](../core_objects/observable/observable_methods/generatewithrelativetime.html)
- [`interval`](../core_objects/observable/observable_methods/generatewithrelativetime.html)
- [`timer`](../core_objects/observable/observable_methods/timer.html)

### `Observable Instance Methods`
- [`bufferWithTime`](../core_objects/observable/observable_instance_methods/bufferwithtime.html)
- [`bufferWithTimeOrCount`](../core_objects/observable/observable_instance_methods/bufferwithtimeorcount.html)
- [`debounce`](../core_objects/observable/observable_instance_methods/debounce.html)
- [`delay`](../core_objects/observable/observable_instance_methods/delay.html)
- [`delaySubscription`](../core_objects/observable/observable_instance_methods/delaysubscription.html)
- [`delayWithSelector`](../core_objects/observable/observable_instance_methods/delaywithselector.html)
- [`sample`](../core_objects/observable/observable_instance_methods/sample.html)
- [`skipLastWithTime`](../core_objects/observable/observable_instance_methods/skiplastwithtime.html)
- [`takeLastBufferWithTime`](../core_objects/observable/observable_instance_methods/takelastbufferwithtime.html)
- [`takeLastWithTime`](../core_objects/observable/observable_instance_methods/takelastwithtime.html)
- [`throttleFirst`](../core_objects/observable/observable_instance_methods/throttlefirst.html)
- [`debounceWithSelector`](../core_objects/observable/observable_instance_methods/debouncewithselector.html)
- [`throttleWithTimeout`](../core_objects/observable/observable_instance_methods/debounce.html)
- [`timeInterval`](../core_objects/observable/observable_instance_methods/timeinterval.html)
- [`timeout`](../core_objects/observable/observable_instance_methods/timeout.html)
- [`timeoutWithSelector`](../core_objects/observable/observable_instance_methods/timeoutwithselector.html)
- [`timestamp`](../core_objects/observable/observable_instance_methods/timestamp.html)
- [`windowWithTime`](../core_objects/observable/observable_instance_methods/windowwithtime.html)
- [`windowWithTimeOrCount`](../core_objects/observable/observable_instance_methods/windowwithtimeorcount.html)
