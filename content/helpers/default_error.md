# defaultError

### <a id="rxhelpersdefaulterror"></a>`Rx.helpers.defaultError(err)`
<a href="#rxhelpersdefaulterror">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/basicheader.js "View in source") [&#x24C9;][1]

Throws the specified error

#### Arguments
1. `err` *(Any)*: The error to throw

#### Example 

```js
var defaultError = Rx.helpers.defaultError;

// Returns its value
defaultError(new Error('woops'))
// => Error: woops 
```