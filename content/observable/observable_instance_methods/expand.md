## [`Rx.Observable.prototype.expand(selector, [scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/expand.js)

{% if book.isPdf %}

![expand](http://reactivex.io/documentation/operators/images/expand.png)

{% else %}



{% endif %}

Expands an observable sequence by recursively invoking selector.

#### Arguments
1. `selector` *(`Function`)*: Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again.
2. `[scheduler=Rx.Scheduler.immediate]` *(`Scheduler`)*: Scheduler on which to perform the expansion. If not provided, this defaults to the immediate scheduler.

#### Returns
*(`Observable`)*: An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate.

#### Example

[](http://jsbin.com/xeyuf/1/embed?js,console)

{% if book.isPdf %}



{% else %}

#### Location

- [`rx`](https://www.npmjs.org/package/rx).experimental.js

{% endif %}