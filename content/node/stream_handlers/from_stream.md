# fromStream

### <a id="rxnodefromstreamstream"></a>`Rx.Node.fromStream(stream)`
<a href="#rxnodefromstreamstream">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.node.js#L91-L115 "View in source") 

Converts a flowing stream to an Observable sequence.

#### Arguments
1. `stream` *(Stream)*: A stream to convert to a observable sequence.

#### Returns
*(Observable)*: An observable sequence which fires on each 'data' event as well as handling 'error' and 'end' events.

#### Example
```js
var Rx = require('rx');

var subscription = Rx.Node.fromStream(process.stdin)
    .subscribe(function (x) { console.log(x); });

// => r<Buffer 72>
// => x<Buffer 78>
```

### Location

- rx.node.js