## [`Rx.Observable.empty([scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/empty.js)

{% if book.isPdf %}

![empty](http://reactivex.io/documentation/operators/images/empty.png)

{% else %}


{% endif %}

Returns an empty observable sequence, using the specified scheduler to send out the single OnCompleted message.

#### Arguments
1. `[scheduler=Rx.Scheduler.immediate]` *(`Scheduler`)*: Scheduler to send the termination call on.

#### Returns
*(`Observable`)*: An observable sequence with no elements.

{% if book.isPdf %}

#### [Example](http://jsbin.com/kizosi/2/edit?js,console)

```js
var source = Rx.Observable.empty();

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onCompleted
```

{% else %}

#### Example

[](http://jsbin.com/kizosi/2/embed?js,console)

{% endif %}
