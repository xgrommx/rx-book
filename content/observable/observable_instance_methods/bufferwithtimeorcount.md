## [`Rx.Observable.prototype.bufferWithTimeOrCount(timeSpan, count, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/bufferwithtimeorcount.js)

{% if book.isPdf %}

![bufferWithTimeOrCount](http://reactivex.io/documentation/operators/images/bufferWithTimeOrCount6.png)

{% else %}



{% endif %}

Projects each element of an observable sequence into a buffer that is completed when either it's full or a given amount of time has elapsed.

#### Arguments
1. `timeSpan` *(`Number`)*: Maximum time length of a buffer.
2. `count` *(`Number`)*: Maximum element count of a buffer.
3. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence of buffers. 

#### Example

[](http://jsbin.com/qaxid/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).time.js

{% endif %}