## [`Rx.Observable.prototype.amb(rightSource)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/ambproto.js)

{% if book.isPdf %}

![amb](http://reactivex.io/documentation/operators/images/amb.png)

{% else %}

<rx-marbles key="amb"></rx-marbles>

{% endif %}

Propagates the observable sequence or Promise that reacts first. "amb" stands for [ambiguous](http://blogs.msdn.com/b/jeffva/archive/2009/11/18/amb-materialize-and-dematerialize.aspx).

#### Arguments
1. `rightSource` *(`Observable`)*: Second observable sequence.

#### Returns
*(`Observable`)*: An observable sequence that surfaces either of the given sequences, whichever reacted first.

{% if book.isPdf %}

#### [Example](http://jsbin.com/joviwu/1/embed?js,console)

```js
var first = Rx.Observable.timer(300).map(function () { return 'first'; });
var second = Rx.Observable.timer(500).map(function () { return 'second'; });

var source = first.amb(second);

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

// => Next: first
// => Completed
```

{% else %}

#### Example

[](http://jsbin.com/joviwu/1/embed?js,console)

{% endif %}
