## [`Rx.Observable.fromCallback(func, [scheduler], [context], [selector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/fromcallback.js)

{% if book.isPdf %}

![fromCallback](http://reactivex.io/documentation/operators/images/fromCallback.png)

{% else %}



{% endif %}

Converts a callback function to an observable sequence. 

#### Arguments
1. `func` *(`Function`)*: Function with a callback as the last parameter to convert to an Observable sequence.
2. `[scheduler=Rx.Scheduler.timeout]` *(`Scheduler`)*: Scheduler to run the function on. If not specified, defaults to `Rx.Scheduler.timeout`.
3. `[context]` *(`Any`)*: The context for the func parameter to be executed.  If not specified, defaults to undefined.
4. `[selector]` *(`Function`)*: A selector which takes the arguments from the callback to produce a single item to yield on next.

#### Returns
*(`Function`)*: A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array if no selector given, else the object created by the selector function.

#### Example
```js
var fs = require('fs'),
    Rx = require('rx');

// Wrap fs.exists
var exists = Rx.Observable.fromCallback(fs.exists);

// Check if file.txt exists
var source = exists('file.txt');

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + result);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

// => Next: true
// => Completed
```
