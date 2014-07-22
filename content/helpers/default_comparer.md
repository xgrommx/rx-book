# defaultComparer

### <a id="rxhelpersdefaultcomparerx-y"></a>`Rx.helpers.defaultComparer(x, y)`
<a href="#rxhelpersdefaultcomparerx-y">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/basicheader.js "View in source") [&#x24C9;][1]

The default equality comparer, used when a comparer is not supplied to a function.  Uses an internal deep equality check.

#### Arguments
1. `x` *(Any)*: The first value to compare
2. `y` *(Any)*: The second value to compare

#### Returns
*(Boolean)*: `true` if equal; else `false`.

#### Example 

```js
var comparer = Rx.helpers.defaultComparer;

// Should return true
var x = 42, y = 42
console.log(comparer(x, y));
// => true

// Should return false
var x = new Date(0), y = new Date();
console.log(comparer(x, y));
// => false
```