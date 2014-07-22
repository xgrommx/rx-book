# defaultSubComparer

### <a id="rxhelpersdefaultsubcomparerx-y"></a>`Rx.helpers.defaultSubcomparer(x, y)`
<a href="#rxhelpersdefaultsubcomparerx-y">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/basicheader.js "View in source") [&#x24C9;][1]

The default comparer to determine whether one object is greater, less than or equal to another.

#### Arguments
1. `x` *(Any)*: The first value to compare
2. `y` *(Any)*: The second value to compare

#### Returns
*(Number)*: Returns `1` if `x` is greater than `y`, `-1` if `y` is greater than `x`, and `0` if the objects are equal.

#### Example 

```js
var comparer = Rx.helpers.defaultSubcomparer;

// Should return 0
var x = 42, y = 42
console.log(comparer(x, y));
// => 0

// Should return -1
var x = new Date(0), y = new Date();
console.log(comparer(x, y));
// => -1

// Should return 1
var x = 43, y = 42;
console.log(comparer(x, y));
// => 1
```