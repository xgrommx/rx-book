## [`Rx.Observable.prototype.forkJoin(...args, [resultSelector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/forkjoinproto.js)

{% if book.isPdf %}

![forkJoin](http://reactivex.io/documentation/operators/images/forkJoin.png)

{% else %}



{% endif %}

Runs all observable sequences in parallel and collect their last elements.

#### Arguments
1. `args`: *(`Arguments` | `Array`)* - An array or arguments of Observable sequences or Promises to collect the last elements for.
2. `resultSelector`: *(`Function`)* - The result selector from all the values produced. If not specified, `forkJoin` will return the results as an array.

#### Returns
*(`Observable`)*: An observable sequence with an array collecting the last elements of all the input sequences or the result of the result selector if specified.

#### Example

[](http://jsbin.com/vezova/1/embed?js,console)

```js
// Without a selector
var source = Rx.Observable.just(42).forkJoin(
  Rx.Observable.range(0, 3));

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });

// => Next: [42, 2]
// => Completed
```