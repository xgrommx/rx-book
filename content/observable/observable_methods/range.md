## [`Rx.Observable.range(start, count, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/range.js)

{% if book.isPdf %}

![range](http://reactivex.io/documentation/operators/images/range.png)

{% else %}



{% endif %}

Generates an observable sequence of integral numbers within a specified range, using the specified scheduler to send out observer messages.

### Arguments
1. `start` *(`Number`)*: The value of the first integer in the sequence.
2. `count` *(`Number`)*: The number of sequential integers to generate.
3. `[scheduler=Rx.Scheduler.currentThread]` *(`Scheduler`)*: Scheduler to run the generator loop on. If not specified, defaults to Scheduler.currentThread.

#### Returns
*(`Observable`)*: An observable sequence that contains a range of sequential integral numbers. 

#### Example

[](http://jsbin.com/bapay/1/embed?js,console)
