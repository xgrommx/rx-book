# refCount

`ConnectableObservable.prototype.refCount()`
<a href="#connectableobservableprototyperefcount">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/publish.js "View in source") 

Returns an observable sequence that stays connected to the source as long as there is at least one subscription to the observable sequence.
   
#### Returns
*(`Observable`)*: An observable sequence that stays connected to the source as long as there is at least one subscription to the observable sequence.
 
#### Example
```js
var interval = Rx.Observable.interval(1000);

var source = interval
    .take(2)
    .doAction(function (x) { 
        console.log('Side effect');
    });
 
var published = source.publish().refCount();
 
published.subscribe(createObserver('SourceA'));
published.subscribe(createObserver('SourceB'));

function createObserver(tag) {
    return Rx.Observer.create(
        function (x) {
            console.log('Next: ' + tag + x);
        },
        function (err) {
            console.log('Error: ' + err);   
        },
        function () {
            console.log('Completed');   
        });
}

// => Side effect
// => Next: SourceA0 
// => Next: SourceB0 
// => Side effect
// => Next: SourceA1 
// => Next: SourceB1 
// => Completed 
// => Completed     
```
### Location

File:
- [`/src/core/observable/publish.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/publish.js)

Dist:
- [`rx.binding.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.binding.js)
- [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) 
- [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

Prerequisites:
- If using `rx.binding.js`
  - [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.lite.compat.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Binding`](http://www.nuget.org/packages/RxJS-Binding/)

Unit Tests:
- [`/tests/observable/publish.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/tests/observable/publish.js)