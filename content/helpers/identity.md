## [`Rx.helpers.identity(x)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/headers/basicheader.js#L4)

A function which returns its value unmodified.

#### Arguments
1. `x` *(Any)*: The value to return.

#### Returns
*(Any)*: The value given as the parameter.

#### Example 

```js
var identity = Rx.helpers.identity;

// Returns its value
var x = identity(42);
console.log(x);
// => 42
```