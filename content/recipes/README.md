# RxJS Recipes

## Error Handling

There are many ways of handling errors in RxJS. This will cover a number of recipes when handling errors:

* Incremental retry with ```retryWhen```

### Incremental retry with ```retryWhen```

This example will show how you can back off a retry for a number of seconds between tries instead of retrying them all at once.

[](http://jsbin.com/pizomo/1/embed?js,console)