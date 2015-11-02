## [`Rx.Observable.fromNodeCallback(func, [context], [selector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/fromnodecallback.js)

{% if book.isPdf %}

![fromNodeCallback](http://reactivex.io/documentation/operators/images/fromNodeCallback.png)

{% else %}



{% endif %}


Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.

#### Arguments
1. `func` *(`Function`)*: Function with a callback as the last parameter to convert to an Observable sequence.
2. `[context]` *(`Any`)*: The context for the func parameter to be executed.  If not specified, defaults to undefined.
3. `[selector]` *(`Function`)*: A selector which takes the arguments from callback sans the error to produce a single item to yield on next.

#### Returns
*(`Function`)*: A function which when applied, returns an observable sequence with the callback arguments as an array if no selector given, else the object created by the selector function on success, or an error if the first parameter is not falsy.

#### Example
```js
var fs = require('fs'),
    Rx = require('rx');

// Wrap fs.exists
var rename = Rx.Observable.fromNodeCallback(fs.rename);

// Rename file which returns no parameters except an error
var source = rename('file1.txt', 'file2.txt');

var subscription = source.subscribe(
    function () {
        console.log('Next: success!');
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

// => Next: success!
// => Completed
```