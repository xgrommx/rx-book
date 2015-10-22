## [`Rx.Observable.using(resourceFactory, observableFactory)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/using.js)

{% if book.isPdf %}

![using](http://reactivex.io/documentation/operators/images/using.png)

{% else %}



{% endif %}

 Constructs an observable sequence that depends on a resource object, whose lifetime is tied to the resulting observable sequence's lifetime.

### Arguments
1. `resourceFactory` *(`Function`)*: Factory function to obtain a resource object.
2. `observableFactory` *(`Scheduler`)*: Factory function to obtain an observable sequence that depends on the obtained resource.

#### Returns
*(`Function`)*: An observable sequence whose lifetime controls the lifetime of the dependent resource object.

#### Example

[](http://jsbin.com/yewaf/1/embed?js,console)

{% if book.isPdf %}



{% else %}

### Location

File:
- [/src/core/observable/using.js](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/using.js)

Dist:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js)
- [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)

Unit Tests:
- [/tests/observable/using.js](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/using.js)

{% endif %}