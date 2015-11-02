## [`Rx.Observable.generate(initialState, condition, iterate, resultSelector, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/generate.js)

{% if book.isPdf %}

![generate](http://reactivex.io/documentation/operators/images/generate.png)

{% else %}



{% endif %}

Converts an array to an observable sequence, using an optional scheduler to enumerate the array.

#### Arguments
1. `initialState` *(`Any`)*: Initial state.
2. `condition` *(`Function`)*: Condition to terminate generation (upon returning false).
3. `iterate` *(`Function`)*: Iteration step function.
4. `resultSelector` *(`Function`)*: Selector function for results produced in the sequence.
5. `[scheduler=Rx.Scheduler.currentThread]` *(`Scheduler`)*: Scheduler on which to run the generator loop. If not provided, defaults to Scheduler.currentThread.

#### Returns
*(`Observable`)*: The generated sequence.

#### Example

[](http://jsbin.com/vemibe/1/embed?js,console)