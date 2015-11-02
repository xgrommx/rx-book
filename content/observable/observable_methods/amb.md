## [`Rx.Observable.amb(...args)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/amb.js) 

{% if book.isPdf==true %}

![amb](http://reactivex.io/documentation/operators/images/amb.png)

{% else %}

<rx-marbles key="amb"></rx-marbles>

{% endif %}

Propagates the observable sequence or Promise that reacts first. "amb" stands for [ambiguous](http://blogs.msdn.com/b/jeffva/archive/2009/11/18/amb-materialize-and-dematerialize.aspx).

#### Arguments
1. `args` *(Array|arguments)*: Observable sources or Promises competing to react first either as an array or arguments.

#### Returns
*(`Observable`)*: An observable sequence that surfaces any of the given sequences, whichever reacted first.

#### Example

{% if book.isPdf==true %}

##### [Using Observable sequences](http://jsbin.com/vanaci/3/edit?js,console)

```js
var source = Rx.Observable.amb(
    Rx.Observable.timer(500).select(() => 'foo'),
    Rx.Observable.timer(200).select(() => 'bar')
);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: bar
// => onCompleted 
```

##### [Using Promises and Observables](http://jsbin.com/bukag/2/edit?js,console)

```js
var source = Rx.Observable.amb(
    RSVP.Promise.resolve('foo'),
    Rx.Observable.timer(200).select(() => 'bar')
);

var subscription = source.subscribe(
  x => console.log(`onNext: ${x}`),
  e => console.log(`onError: ${e}`),
  () => console.log('onCompleted'));

// => onNext: foo
// => onCompleted
```

{% else %}

##### Using Observable sequences
[](http://jsbin.com/vanaci/3/embed?js,console)

##### Using Promises and Observables
[](http://jsbin.com/bukag/2/embed?js,console)

{% endif %}