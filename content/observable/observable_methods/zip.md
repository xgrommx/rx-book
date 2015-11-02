## [`Rx.Observable.zip(...args, [resultSelector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/zip.js)

{% if book.isPdf %}

![zip](http://reactivex.io/documentation/operators/images/zip.png)

{% else %}



{% endif %}

Merges the specified observable sequences or Promises into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index. If the result selector function is omitted, a list with the elements of the observable sequences at corresponding indexes will be yielded.

#### Arguments
1. `args` *(`Array`|`arguments`)*: Observable sources.
2. `[resultSelector]` *(Function)*: A function which takes the inputs at the specified index and combines them together.  If omitted, a list with the elements of the observable sequences at corresponding indexes will be yielded.

#### Returns
*(`Observable`)*: An observable sequence containing the result of combining elements of the sources using the specified result selector function.

#### Example

##### Without a result selector

```js
var range = Rx.Observable.range(0, 5);

var source = Observable.zip(
  range,
  range.skip(1),
  range.skip(2)
);

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

// => Next: 0,1,2
// => Next: 1,2,3
// => Next: 2,3,4
// => Completed
``` 

##### Using arguments

[](http://jsbin.com/jaliqo/1/embed?js,console)

##### Using promises and Observables */

[](http://jsbin.com/tuset/1/embed?js,console)