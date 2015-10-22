# fromCallback

### <a id="rxnodefromcallbackfunc-scheduler-context"></a>`Rx.Node.fromCallback(func, [scheduler], [context])`
<a href="#rxnodefromcallbackfunc-scheduler-context">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.node.js#L27-L29 "View in source") 

**Deprecated in favor of `Rx.Observable.fromCallback` in rx.async.js.**

Converts a callback function to an observable sequence. 

#### Arguments
1. `func` *(Function)*: Callback function
2. `[scheduler = Rx.Scheduler.timeout]` *(Scheduler)*: Scheduler used to execute the callback.
3. `[context]` *(Any)*: The context to execute the callback.

#### Returns
*(Function)*: Function, when called with arguments, creates an Observable sequence from the callback.

#### Example
```js
var fs = require('fs');
var Rx = require('Rx');

// Wrap exists
var exists = Rx.Node.fromCallback(fs.exists);

// Call exists
var source = exists('/etc/passwd');

var observer = Rx.Observer.create(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    }
);

var subscription = source.subscribe(observer);

// => Next: true
// => Completed
```

{% if book.isPdf %}



{% else %}

### Location

- rx.node.js

{% endif %}