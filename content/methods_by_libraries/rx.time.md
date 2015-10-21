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
- [`generateWithAbsoluteTime`](../observable/observable_methods/generatewithabsolutetime.html)
- [`generateWithRelativeTime`](../observable/observable_methods/generatewithrelativetime.html)
- [`interval`](../observable/observable_methods/generatewithrelativetime.html)
- [`timer`](../observable/observable_methods/timer.html)

### `Observable Instance Methods`
- [`bufferWithTime`](../observable/observable_instance_methods/bufferwithtime.html)
- [`bufferWithTimeOrCount`](../observable/observable_instance_methods/bufferwithtimeorcount.html)
- [`debounce`](../observable/observable_instance_methods/debounce.html)
- [`delay`](../observable/observable_instance_methods/delay.html)
- [`delaySubscription`](../observable/observable_instance_methods/delaysubscription.html)
- [`delayWithSelector`](../observable/observable_instance_methods/delaywithselector.html)
- [`sample`](../observable/observable_instance_methods/sample.html)
- [`skipLastWithTime`](../observable/observable_instance_methods/skiplastwithtime.html)
- [`takeLastBufferWithTime`](../observable/observable_instance_methods/takelastbufferwithtime.html)
- [`takeLastWithTime`](../observable/observable_instance_methods/takelastwithtime.html)
- [`throttleFirst`](../observable/observable_instance_methods/throttlefirst.html)
- [`debounceWithSelector`](../observable/observable_instance_methods/debouncewithselector.html)
- [`throttleWithTimeout`](../observable/observable_instance_methods/debounce.html)
- [`timeInterval`](../observable/observable_instance_methods/timeinterval.html)
- [`timeout`](../observable/observable_instance_methods/timeout.html)
- [`timeoutWithSelector`](../observable/observable_instance_methods/timeoutwithselector.html)
- [`timestamp`](../observable/observable_instance_methods/timestamp.html)
- [`windowWithTime`](../observable/observable_instance_methods/windowwithtime.html)
- [`windowWithTimeOrCount`](../observable/observable_instance_methods/windowwithtimeorcount.html)
