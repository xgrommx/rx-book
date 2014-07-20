# catch | catchException

`Rx.Observable.prototype.catch(second | handler)`
<a href="#rxobservableprototypecatchsecond--handler">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js#L3107-L3112 "View in source") 

Continues an observable sequence that is terminated by an exception with the next observable sequence.  There is an alias for this method `catchException` for browsers <IE9

#### Arguments
1. `second` *(`Observable`)*: A second observable sequence used to produce results when an error occurred in the first sequence.
1. `handler` *(`Function`)*: Exception handler function that returns an observable sequence given the error that occurred in the first sequence

#### Returns
*(`Observable`)*: An observable sequence containing the first sequence's elements, followed by the elements of the handler sequence in case an exception occurred.

#### Example

##### Using a second observable

[](http://jsbin.com/paxiz/1/embed?js,console)

##### Using a handler function

[](http://jsbin.com/nikay/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx)