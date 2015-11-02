## [`Rx.Observable.prototype.elementAt(index, [defaultValue])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/elementat.js)

{% if book.isPdf %}

![elementAt](http://reactivex.io/documentation/operators/images/elementAt.png)

{% else %}

<rx-marbles key="elementAt"></rx-marbles>

{% endif %}

Returns the element at a specified index in a sequence.  If the specified index is out of bounds and no default value was given `onError` will be called with an error, however, if a default value has been specified, that value will be returned via an `onNext` call.

#### Arguments
1. `index` *(`Number`)*: The zero-based index of the element to retrieve.
2. `[defaultValue]` *(`Any`)*: Default value if no such element exists.

#### Returns
*(`Observable`)*: An observable sequence that produces the element at the specified position in the source sequence. If the specified index is out of bounds and no default value was given `onError` will be called with an error, however, if a default value has been specified, that value will be returned via an `onNext` call.

#### Example

##### Finds an index

[](http://jsbin.com/yuviyi/1/embed?js,console)

##### Not found

[](http://jsbin.com/coces/1/embed?js,console)

```js

/* With default value */
var source = Rx.Observable.from([1,2,3,4])
  .elementAt(4, 42);

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

// => Next: 42
// => Completed
```