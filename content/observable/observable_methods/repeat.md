## [`Rx.Observable.repeat(value, [repeatCount], [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/repeat.js)

{% if book.isPdf %}

![repeat](http://reactivex.io/documentation/operators/images/repeat.png)

{% else %}



{% endif %}

Generates an observable sequence that repeats the given element the specified number of times, using the specified scheduler to send out observer messages.

### Arguments
1. `value` *(`Any`)*: Element to repeat.
2. `[repeatCount=-1]` *(`Number`)*:Number of times to repeat the element. If not specified, repeats indefinitely.
3. `[scheduler=Rx.Scheduler.immediate]` *(`Scheduler`)*: Scheduler to run the producer loop on. If not specified, defaults to Scheduler.immediate.

#### Returns
*(`Observable`)*: An observable sequence that repeats the given element the specified number of times.

#### Example

[](http://jsbin.com/hezux/1/embed?js,console)
