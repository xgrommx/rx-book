# fromEvent

### <a id="rxnodefromeventeventemitter-eventname"></a>`Rx.Node.fromEvent(eventEmitter, eventName)`
<a href="#rxnodefromeventeventemitter-eventname">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.node.js#L54-L56 "View in source") 

Handles an event from the given EventEmitter as an observable sequence.  

#### Arguments
1. `eventEmitter` *(EventEmitter)*: The EventEmitter to subscribe to the given event.
2. `eventName` *(String)*: The event name to subscribe.

#### Returns
*(Observable)*: An observable sequence generated from the named event from the given EventEmitter.

#### Example
```js
var EventEmitter = require('events').EventEmitter;
var Rx = require('Rx');

var emitter = new EventEmitter();

var source = Rx.Node.fromEvent(emitter, 'data');

var observer = Rx.Observer.create(
    function (x) {
        console.log('Next: ' + x[0]);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    }
);

var subscription = source.subscribe(observer);

emitter.emit('data', 'foo');

// => Next: foo
```

{% if book.isPdf %}



{% else %}

### Location

- rx.node.js

{% endif %}
