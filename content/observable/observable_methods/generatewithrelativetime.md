## [`Rx.Observable.generateWithRelativeTime(initialState, condition, iterate, resultSelector, timeSelector, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/generatewithrelativetime.js)

{% if book.isPdf %}

![generateWithRelativeTime](http://reactivex.io/documentation/operators/images/generateWithRelativeTime.png)

{% else %}



{% endif %}

Generates an observable sequence by iterating a state from an initial state until the condition fails.

#### Arguments
1. `initialState` *(`Any`)*: Initial state.
2. `condition` *(`Function`)*: Condition to terminate generation (upon returning false).
3. `iterate` *(`Function`)*: Iteration step function.
4. `resultSelector` *(`Function`)*: Selector function for results produced in the sequence.
5. `timeSelector` *(`Function`)*: Time selector function to control the speed of values being produced each iteration, returning integer values denoting milliseconds.
6. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler on which to run the generator loop. If not provided, defaults to Scheduler.timeout.

#### Returns
*(`Observable`)*: The generated sequence.

#### Example

[](http://jsbin.com/jisopo/1/embed?js,console)