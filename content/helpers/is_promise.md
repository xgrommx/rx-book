# isPromise

### <a id="rxhelpersispromisep"></a>`Rx.helpers.isPromise(p)`
<a href="#rxhelpersispromisep">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/basicheader.js "View in source") [&#x24C9;][1]

A function which determines whether the object is a `Promise`.

#### Arguments
1. `p` *(Any)*: The object to determine whether it is a promise.

#### Returns
*(Boolean)*: `true` if the object is a `Promise` else `false`

#### Example 

```js
var isPromise = Rx.helpers.isPromise;

var p = RSVP.Promise(function (res) { res(42); });

console.log(isPromise(p));
// => true
```