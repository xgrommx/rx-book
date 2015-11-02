## [`Rx.Observable.start(func, [scheduler], [context])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/start.js)

{% if book.isPdf %}

![start](http://reactivex.io/documentation/operators/images/start.png)

{% else %}



{% endif %}

Invokes the specified function asynchronously on the specified scheduler, surfacing the result through an observable sequence.

### Arguments
1. `func` *(`Function`)*: Function to run asynchronously.
2. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
3. `[context]` *(`Any`)*: The context for the func parameter to be executed.  If not specified, defaults to undefined.

#### Returns
*(`Observable`)*: An observable sequence exposing the function's result value, or an exception.

#### Example

[](http://jsbin.com/xitili/1/embed?js,console)
