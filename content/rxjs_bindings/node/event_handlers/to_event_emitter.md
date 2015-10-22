# toEventEmitter

### <a id="rxnodetoeventemitterobservable-eventname"></a>`Rx.Node.toEventEmitter(observable, eventName)`
<a href="#rxnodetoeventemitterobservable-eventname">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.node.js#L66-L84 "View in source") 

Converts the given observable sequence to an event emitter with the given event name. 
The errors are handled on the 'error' event and completion on the 'end' event.

#### Arguments
1. `observable` *(Obsesrvable)*: The observable sequence to convert to an EventEmitter.
2. `eventName` *(String)*: The event name to subscribe.

#### Returns
*(EventEmitter)*: An EventEmitter which emits the given eventName for each onNext call in addition to 'error' and 'end' events.

#### Example
```js
var Rx = require('Rx');

var source = Rx.Observable.return(42);

var emitter = Rx.Node.toEventEmitter(source, 'data');

emitter.on('data', function (data) {
    console.log('Data: ' + data); 
});

emitter.on('end', function () {
    console.log('End');
});

// Ensure to call publish to fire events from the observable
emitter.publish();

// => Data: 42
// => End
```

{% if book.isPdf %}



{% else %}

### Location

- rx.node.js

{% endif %}
