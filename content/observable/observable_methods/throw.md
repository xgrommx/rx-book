## [`Rx.Observable.throw(exception, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/throw.js)

{% if book.isPdf %}

![throw](http://reactivex.io/documentation/operators/images/throw.c.png)

{% else %}



{% endif %}

Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.

### Arguments
1. `dueTime` *(`Any`)*: Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
2. `[scheduler=Rx.Scheduler.immediate]` *(`Scheduler`)*: Scheduler to send the exceptional termination call on. If not specified, defaults to the immediate scheduler.

#### Returns
*(`Observable`)*: The observable sequence that terminates exceptionally with the specified exception object.
   
#### Example

[](http://jsbin.com/luyaho/1/embed?js,console)
