## [`Rx.Observable.prototype.sum([keySelector], [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/sum.js)

{% if book.isPdf %}

![sum](http://reactivex.io/documentation/operators/images/sum.png)

{% else %}

<rx-marbles key="sum"></rx-marbles>

{% endif %}

Computes the sum of a sequence of values that are obtained by invoking an optional transform function on each element of the input sequence, else if not specified computes the sum on each item in the sequence.

#### Arguments
1. `[keySelector]` *(`Scheduler`)*:  A transform function to apply to each element.  The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed

#### Returns
*(`Observable`)*: An observable sequence containing a single element with the sum of the values in the source sequence.
 
#### Example

##### Without a selector

[](http://jsbin.com/cunac/1/embed?js,console)

##### With a selector

[](http://jsbin.com/jelice/1/embed?js,console)
