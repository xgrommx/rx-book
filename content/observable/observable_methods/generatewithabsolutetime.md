## [`Rx.Observable.generateWithAbsoluteTime(initialState, condition, iterate, resultSelector, timeSelector, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/generatewithabsolutetime.js)

{% if book.isPdf %}

![generateWithAbsoluteTime](http://reactivex.io/documentation/operators/images/generateWithAbsoluteTime.png)

{% else %}



{% endif %}

Generates an observable sequence by iterating a state from an initial state until the condition fails.

#### Arguments
1. `initialState` *(`Any`)*: Initial state.
2. `condition` *(`Function`)*: Condition to terminate generation (upon returning false).
3. `iterate` *(`Function`)*: Iteration step function.
4. `resultSelector` *(`Function`)*: Selector function for results produced in the sequence.
5. `timeSelector` *(`Function`)*: Time selector function to control the speed of values being produced each iteration, returning Date values.
6. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler on which to run the generator loop. If not provided, defaults to Scheduler.timeout.

#### Returns
*(`Observable`)*: The generated sequence.

#### Example

[](http://jsbin.com/pugoy/1/embed?js,console)