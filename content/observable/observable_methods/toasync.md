## [`Rx.Observable.toAsync(func, [scheduler], [context])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/toasync.js)

{% if book.isPdf %}

![toAsync](http://reactivex.io/documentation/operators/images/toAsync.png)

{% else %}



{% endif %}

Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.

### Arguments
1. `func` *(`Function`)*: Function to convert to an asynchronous function.
2. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
3. `[context]` *(`Any`)*: The context for the func parameter to be executed.  If not specified, defaults to undefined.

#### Returns
*(`Function`)*: Asynchronous function.

#### Example

[](http://jsbin.com/zokawu/1/embed?js,console)
