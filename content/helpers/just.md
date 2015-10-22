## [`Rx.helpers.just(value)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/headers/basicheader.js#L6)

A function which takes an argument and returns a function, when invoked, returns the argument.

#### Arguments
1. `value` *(Any)*: The value to return.

#### Returns
*(Function)*: A function, when invoked, returns the value.

#### Example 

```js
var just = Rx.helpers.just;

Rx.Observable.timer(100)
  .map(just('foo'))
  .subscribe(console.log.bind(console));
// => foo
```