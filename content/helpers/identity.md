# identity

### <a id="rxhelpersidentityx"></a>`Rx.helpers.identity(x)`
<a href="#rxhelpersidentityx">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/basicheader.js "View in source") [&#x24C9;][1]

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