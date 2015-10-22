## [`Rx.Observable.prototype.shareValue(value)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/sharevalue.js)

{% if book.isPdf %}



{% else %}



{% endif %}

Returns an observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
   
This operator is a specialization of `publishValue` which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.

#### Returns
*(`Observable`)*: An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
 
#### Example

[](http://jsbin.com/pebufu/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/publishvalue.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/publishvalue.js)

Dist:
- [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) 
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using `rx.binding.js`
  - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Binding`](http://www.nuget.org/packages/RxJS-Binding/)
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

Unit Tests:
- [`/tests/observable/publishvalue.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/publishvalue.js)

{% endif %}