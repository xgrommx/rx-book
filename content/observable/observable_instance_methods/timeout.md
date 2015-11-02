## [`Rx.Observable.prototype.timeout(dueTime, [other], [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/timeout.js)

{% if book.isPdf %}

![timeout](http://reactivex.io/documentation/operators/images/timeout.1.png)

{% else %}



{% endif %}

Returns the source observable sequence or the other observable sequence if dueTime elapses.

#### Arguments
1. `dueTime` *(Date | Number)*: Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) when a timeout occurs.
2. `[other]` *(`Observable`)*: Sequence or Promise to return in case of a timeout. If not specified, a timeout error throwing sequence will be used.
3. `[scheduler=Rx.Observable.timeout]` *(`Scheduler`)*: Scheduler to run the timeout timers on. If not specified, the timeout scheduler is used.

#### Returns
*(`Observable`)*: An observable sequence with time interval information on values.

#### Example

##### With no other

[](http://jsbin.com/vorogi/1/embed?js,console)

##### With another

[](http://jsbin.com/lobar/1/embed?js,console)
