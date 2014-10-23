# fromWritableStream

### <a id="rxnodefromwritablestreamstream"></a>`Rx.Node.fromWritableStream(stream)`
<a href="#rxnodefromwritablestreamstream">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.node.js#L132-L134 "View in source")

Converts a flowing writeable stream to an Observable sequence.

#### Arguments
1. `stream` *(Stream)*: A stream to convert to a observable sequence.

#### Returns
*(Observable)*: An observable sequence which fires on each 'data' event as well as handling 'error' and 'finish' events.

#### Example
```js
var Rx = require('rx');

var subscription = Rx.Node.fromWritableStream(process.stdout)
    .subscribe(function (x) { console.log(x); });

// => r<Buffer 72>
// => x<Buffer 78>
```

### Location

- rx.node.js