# writeToStream

### <a id="rxnodewritetostreamobservable-stream-encoding"></a>`Rx.Node.writeToStream(observable, stream, [encoding])`
<a href="#rxnodewritetostreamobservable-stream-encoding">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.node.js#L124-L138 "View in source") 

Writes an observable sequence to a stream.

#### Arguments
1. `observable` *(Obsesrvable)*: Observable sequence to write to a stream.
2. `stream` *(Stream)*: The stream to write to.
3. `[encoding]` *(String)*: The encoding of the item to write.

#### Returns
*(Disposable)*: The subscription handle.

#### Example
```js
var Rx = require('Rx');

var source = Rx.Observable.range(0, 5);

var subscription = Rx.Node.writeToStream(source, process.stdout, 'utf8');

// => 01234
```

### Location

- rx.node.js
