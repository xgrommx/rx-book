## [`Rx.Observable.prototype.concatMapObserver(onNext, onError, onCompleted, [thisArg])`, `Rx.Observable.prototype.selectConcatObserver(onNext, onError, onCompleted, [thisArg])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/concatmapobserver.js)

{% if book.isPdf %}

![concatMapObserver](http://reactivex.io/documentation/operators/images/concatMapObserver.png)

{% else %}



{% endif %}

Projects each notification of an observable sequence to an observable sequence and concats the resulting observable sequences into one observable sequence.

#### Arguments
1. `onNext` *(`Function`)*:  A transform function to apply to each element. The selector is called with the following information:
    1. the value of the element
    2. the index of the element
2. `onError` *(`Function`)*: A transform function to apply when an error occurs in the source sequence.
3. `onCompleted` *(`Function`)*: A transform function to apply when the end of the source sequence is reached.
4. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the transform functions.

#### Returns
*(`Observable`)*: An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.

#### Example

[](http://jsbin.com/dasivu/1/embed?js,console)