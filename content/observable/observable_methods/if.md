## [`Rx.Observable.if(condition, thenSource, [elseSource])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/if.js)

{% if book.isPdf %}

![if](http://reactivex.io/documentation/operators/images/if.png)

{% else %}



{% endif %}

Determines whether an observable collection contains values.

#### Arguments
1. `condition` *(`Function`)*: The condition which determines if the thenSource or elseSource will be run.
2. `thenSource` *(`Observable`)*: thenSource The observable sequence that will be run if the condition function returns true.
3. `[elseSource]` *(Observable|Scheduler)*: The observable sequence that will be run if the condition function returns false. If this is not provided, it defaults to Rx.Observabe.Empty with the specified scheduler.

#### Returns
*(`Observable`)*: The generated sequence.

#### Example

##### This uses and only then source

[](http://jsbin.com/pijusu/1/embed?js,console)

##### The next example uses an elseSource

[](http://jsbin.com/fegak/1/embed?js,console)