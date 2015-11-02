## [`Rx.Observable.prototype.windowWithTimeOrCount(timeSpan, count, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/windowwithtimeorcount.js)

{% if book.isPdf %}

![windowWithTimeOrCount](http://reactivex.io/documentation/operators/images/windowWithTimeOrCount6.png)

{% else %}



{% endif %}

Projects each element of an observable sequence into a window that is completed when either it's full or a given amount of time has elapsed.

#### Arguments
1. `timeSpan` *(`Number`)*: Maximum time length of a window.
2. `count` *(`Number`)*: Maximum element count of a window.
3. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run windows timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence of windows. 

#### Example

[](http://jsbin.com/yorom/1/embed?js,console)
