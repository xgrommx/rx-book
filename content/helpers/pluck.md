# pluck

### <a id="rxhelperspluckproperty"></a>`Rx.helpers.pluck(property)`
<a href="#rxhelperspluckproperty">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/basicheader.js "View in source") [&#x24C9;][1]

Plucks a property from the object.

#### Arguments
1. `property` *(String)*: The property name to pluck from the object.

#### Returns
*(Boolean)*: `true` if equal; else `false`.

#### Example 

```js
var pluck = Rx.helpers.pluck;

var source = Rx.Observable.interval(1000)
  .timeInterval()
  .map(pluck('value'))
  .take(3);

source.subscribe(console.log.bind(console));
// => 0
// => 1
// => 2
```