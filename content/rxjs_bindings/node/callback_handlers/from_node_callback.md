# fromNodeCallback

### <a id="rxnodefromnodecallbackfunc-scheduler-context"></a>`Rx.Node.fromNodeCallback(func, [scheduler], [context])`
<a href="#rxnodefromcallbackfunc-scheduler-context">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.node.js#L41-L43 "View in source") 

**Deprecated in favor of `Rx.Observable.fromNodeCallback` in rx.async.js.**

Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.

#### Arguments
1. `func` *(Function)*: Callback function which must be in function (err, ...) format.
2. `[scheduler = Rx.Scheduler.timeout]` *(Scheduler)*: Scheduler used to execute the callback.
3. `[context]` *(Any)*: The context to execute the callback.

#### Returns
*(Function)*: An function which when applied, returns an observable sequence with the callback arguments as an array.

#### Example
```js
var fs = require('fs');
var Rx = require('Rx');

var source = Rx.Node.fromNodeCallback(fs.stat)('file.txt');

var observer = Rx.Observer.create(
    function (x) {
        var stat = x[0];
        console.log('Next: ' + stat.isFile());
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