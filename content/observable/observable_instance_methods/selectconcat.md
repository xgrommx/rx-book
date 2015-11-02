## [`Rx.Observable.prototype.selectConcat(selector, [resultSelector])`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/concatmap.js)

{% if book.isPdf %}

![concatMap](http://reactivex.io/documentation/operators/images/concatMap.png)

{% else %}



{% endif %}

This is an alias for the `concatMap` method.  This can be one of the following:

Projects each element of an observable sequence to an observable sequence and concatenates the resulting observable sequences or Promises into one observable sequence.

```js
source.selectConcat(function (x, i) { return Rx.Observable.range(0, x); });
source.selectConcat(function (x, i) { return Promise.resolve(x + 1}; });
```

Projects each element of an observable sequence or Promise to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and concatenates the results into one observable sequence.

```js
source.selectConcat(function (x, i) { return Rx.Observable.range(0, x); }, function (x, y, i) { return x + y + i; });
source.selectConcat(function (x, i) { return Promise.resolve(x + i); }, function (x, y, i) { return x + y + i; });
```

Projects each element of the source observable sequence to the other observable sequence or Promise and merges the resulting observable sequences into one observable sequence.
 
 ```js
source.selectConcat(Rx.Observable.fromArray([1,2,3]));
source.selectConcat(Promise.resolve(42));
 ```

#### Arguments
1. `selector` *(`Function`)*:  A transform function to apply to each element or an observable sequence to project each element from the source sequence onto.
2. `[resultSelector]` *(`Function`)*: A transform function to apply to each element of the intermediate sequence.
 
#### Returns
*(`Observable`)*: An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.   

#### Example

##### Using without a promise

[](http://jsbin.com/qomiwi/1/embed?js,console)

##### Using a promise

[](http://jsbin.com/yinibo/1/embed?js,console)
