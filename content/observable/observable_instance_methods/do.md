# do | doAction

`Rx.Observable.prototype.do(observer | [onNext], [onError], [onCompleted])`
<a href="#rxobservableprototypedoobserver--onnext-onerror-oncompleted">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L3779-L3820 "View in source") 

Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
There is an alias to this method `doAction` for browsers <IE9.

#### Arguments
1. `observer` *(Observer)*: An observer to invoke for each element in the observable sequence.
1. `[onNext]` *(`Function`)*: Function to invoke for each element in the observable sequence.
2. `[onError]` *(`Function`)*: Function to invoke upon exceptional termination of the observable sequence. Used if only the first parameter is also a function.
3. `[oncompleted]` *(`Function`)*: Function to invoke upon graceful termination of the observable sequence. Used if only the first parameter is also a function.

#### Returns
*(`Observable`)*: An observable sequence whose observers trigger an invocation of the given observable factory function.

#### Example
```js
/* Using a function */
var source = Rx.Observable.range(0, 3)
    .do(
        function (x) { console.log('Do Next: ' + x; ); },
        function (err) { console.log('Do Error: ' + x; ); },
        function () { console.log('Do Completed'); }
    );

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

// => Do Next: 0
// => Next: 0
// => Do Next: 1
// => Next: 1
// => Do Next: 2
// => Next: 2
// => Do Completed
// => Completed 

/* Using an observer */
var observer = Rx.Observer.create(
    function (x) { console.log('Do Next: ' + x; ); },
    function (err) { console.log('Do Error: ' + x; ); },
    function () { console.log('Do Completed'); }
);

var source = Rx.Observable.range(0, 3)
    .do(observer);


var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

// => Do Next: 0
// => Next: 0
// => Do Next: 1
// => Next: 1
// => Do Next: 2
// => Next: 2
// => Do Completed
// => Completed 
```
#### Location

- [`rx`](https://www.npmjs.org/package/rx)