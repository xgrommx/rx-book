## [`Rx.Observable.prototype.window([windowOpenings], [windowBoundaries], windowClosingSelector)`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/window.js)

{% if book.isPdf %}

![window](http://reactivex.io/documentation/operators/images/window.png)

{% else %}



{% endif %}

Projects each element of an observable sequence into zero or more windows.

```js
// With window closing selector
Rx.Observable.prototype.window(windowClosingSelector);

// With window opening and window closing selector
Rx.Observable.prototype.window(windowOpenings, windowClosingSelector);

// With boundaries
Rx.Observable.prototype.window(windowBoundaries);
```

#### Arguments
1. `[windowOpenings]` *(`Observable`)*: Observable sequence whose elements denote the creation of new windows 
2.`[windowBoundaries]` *(`Observable`)*: Sequence of window boundary markers. The current window is closed and a new window is opened upon receiving a boundary marker. 
3. `windowClosingSelector` *(`Function`)*: A function invoked to define the closing of each produced window.

#### Returns
*(`Observable`)*: An observable sequence of windows.

#### Example

##### With window boundaries

[](http://jsbin.com/kuqake/1/embed?js,console)  

##### With window opening and window closing selector

[](http://jsbin.com/maloda/1/embed?js,console)

##### With openings and closings

[](http://jsbin.com/sequx/1/embed?js,console)
