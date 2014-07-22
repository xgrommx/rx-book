# just

### <a id="rxhelpersidentityx"></a>`Rx.helpers.just(value)`
<a href="#rxhelpersjustvalue">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/basicheader.js "View in source") [&#x24C9;][1]

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