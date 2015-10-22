# RxJS Recipes

## Error Handling

There are many ways of handling errors in RxJS. This will cover a number of recipes when handling errors:

* Incremental retry with ```retryWhen```

### Incremental retry with ```retryWhen```

This example will show how you can back off a retry for a number of seconds between tries instead of retrying them all at once.

{% if book.isPdf %}

#### [Example](http://jsbin.com/pizomo/3/edit?js,console)

```js
function identity(x) { return x; }

Rx.Observable.create(o => {
      console.log('subscribing');
      o.onError(new Error('always fails'));
  }).retryWhen(attempts => {
      return Rx.Observable.range(1, 3)
        .zip(attempts, identity)
        .flatMap(i => {
          console.log('delay retry by ' + i + ' second(s)');
          return Rx.Observable.timer(i * 1000);
      });
  }).subscribe();

// => subscribing
// => delay retry by 1 second(s)
// => subscribing
// => delay retry by 2 second(s)
// => subscribing
// => delay retry by 3 second(s)
// => subscribing

```

{% else %}

#### Example
[](http://jsbin.com/pizomo/3/embed?js,console)

{% endif %}