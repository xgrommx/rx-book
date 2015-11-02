## [`Rx.Observable.prototype.first([predicate], [thisArg], [defaultValue])`, `Rx.Observable.prototype.first([settings])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/first.js)

{% if book.isPdf %}

![first](http://reactivex.io/documentation/operators/images/first.png)

{% else %}

<rx-marbles key="first"></rx-marbles>

{% endif %}

Returns the first element of an observable sequence that satisfies the condition in the predicate, or a default value if no such element exists.  If no default value is given, then `onError` will be called.

#### Arguments

`Rx.Observable.prototype.first([predicate], [thisArg], [defaultValue])`

1. `[predicate]` *(`Function`)*: A predicate function to evaluate for elements in the source sequence. The callback is called with the following information:
    1. the value of the element
    2. the index of the element
    3. the Observable object being subscribed
2. `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.
3. `[defaultValue]` *(`Any`)*: Default value if no such element exists.

`Rx.Observable.prototype.first([settings])`

1. `[settings]` *(`Object`)*: An object with the following fields
    - `[predicate]` *(`Function`)*: A predicate function to evaluate for elements in the source sequence. The callback is called with the following information:
        1. the value of the element
        2. the index of the element
        3. the Observable object being subscribed
    - `[thisArg]` *(`Any`)*: Object to use as `this` when executing the predicate.
    - `[defaultValue]` *(`Any`)*: Default value if no such element exists.

#### Returns
*(`Observable`)*: An observable sequence that contains elements from the input sequence that satisfy the condition.

#### Example

##### No Match

[](http://jsbin.com/begup/1/embed?js,console)

##### Without a predicate

[](http://jsbin.com/guhob/1/embed?js,console)

##### With a predicate

[](http://jsbin.com/caceg/1/embed?js,console)

```js
/* With a default value */
var source = Rx.Observable.range(0, 10)
  .first({
    predicate: function (x, idx, obs) { return x > 10; },
    defaultValue: 42
  });


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