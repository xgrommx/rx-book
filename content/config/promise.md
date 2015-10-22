## [`Rx.config.Promise`]()

Sets the default Promise type to be used when the [`toPromise`](../observable/observable_instance_methods/topromise.html) method is called.  Note that the Promise implementation must conform to the ES6 specification.  Some of those supported libraries are [Q](https://github.com/kriskowal/q), [RSVP](https://github.com/tildeio/rsvp.js), [when.js](https://github.com/cujojs/when) among others.  If not specified, this defaults to the native ES6 Promise, if available, else will throw an error.

#### Example

```js
Rx.config.Promise = RSVP.Promise;

var p = Rx.Observable.just(1).toPromise()
  .then(value => console.log('Value: %s', s));
// => Value: 1
```