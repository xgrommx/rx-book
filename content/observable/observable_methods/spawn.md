## [`Rx.Observable.spawn(fn)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/spawn.js)

Spawns a generator function which allows for Promises, Observable sequences, Arrays, Objects, Generators and functions.

#### Arguments
1. `fn` *(`Function`)*: The spawning function.

#### Returns
*(`Observable`)*: An Observable with the final result.

#### Example
```js
var Rx = require('rx');

var thunk = function (val) {
  return function (cb) {
    cb(null, val);
  };
};

var spawned = Rx.Observable.spawn(function* () {
  var v = yield thunk(12);
  var w = yield [24];
  var x = yield Rx.Observable.just(42);
  var y = yield Rx.Observable.just(56);
  var z = yield Promise.resolve(78);
  return v + w[0] + x + y + z;
});

spawned.subscribe(
  function (x) { console.log('next %s', x); },
  function (e) { console.log('error %s', e); },
  function () { console.log('completed'); }
);

// => next 212
// => completed
```