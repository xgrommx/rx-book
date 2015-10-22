## [`Rx.helpers.defaultError(err)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/headers/basicheader.js#L11)

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