## [`Rx.Observable.case(selector, sources, [elseSource|scheduler])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/case.js)

{% if book.isPdf==true %}

![case](http://reactivex.io/documentation/operators/images/case.png)

{% endif %}

Uses selector to determine which source in sources to use.  There is an alias 'switchCase' for browsers <IE9.

### Arguments
1. `selector` *(`Function`)*: The function which extracts the value for to test in a case statement.
2. `sources` *(`Object`)*: A object which has keys which correspond to the case statement labels.
3. `[elseSource|scheduler]` *(`Observable` | `Scheduler`)*: The observable sequence that will be run if the sources are not matched. If this is not provided, it defaults to `Rx.Observabe.empty` with the specified scheduler.

#### Returns
*(`Observable`)*: An observable sequence which is determined by a case statement. 

{% if book.isPdf %}

#### [Example](http://jsbin.com/ladamu/2/edit?js,console)

```js
var sources = {
    'foo': Rx.Observable.return(42),
    'bar': Rx.Observable.return(56)
};

var defaultSource = Rx.Observable.empty();

var source = Rx.Observable.case(
    () => 'foo',
    sources,
    defaultSource);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

//=> onNext: 42 
//=> onCompleted
```

{% else %}

#### Example
[](http://jsbin.com/ladamu/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

File:
- [`/src/core/observable/case.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/case.js)

Dist:
- [`rx.experimental.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.experimental.js)

Prerequisites:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Experimental`](http://www.nuget.org/packages/RxJS-Experimental)

Unit Tests:
- [`/tests/observable/case.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/case.js)

{% endif %}