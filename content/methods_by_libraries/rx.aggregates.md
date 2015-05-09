# RxJS Aggregates Module #

The Reactive Extensions for JavaScript has a number of aggregation operators including those you might already know from the Array#extras and the upcoming ES6 standard such as `reduce`, `find` and `findIndex`.  This module is used exclusively for aggregation operations used on finite observable sequences.  In addition to the aforementioned operators, there are many useful operators such as `count`, `sum`, `average` and determining whether two sequences are equal via the `sequenceEqual` method.

## Details ##

Files:
- [`rx.aggregates.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.aggregates.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Aggregates`](http://www.nuget.org/packages/RxJS-Aggregates/)

File Dependencies:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.compat.js)

NuGet Dependencies:
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/) | [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Main/)

## Included Observable Operators ##

### `Observable Instance Methods`
- [`aggregate`](../core_objects/observable/observable_instance_methods/aggregate.html)
- [`all`](../core_objects/observable/observable_instance_methods/every.html)
- [`any`](../core_objects/observable/observable_instance_methods/some.html)
- [`average`](../core_objects/observable/observable_instance_methods/average.html)
- [`includes`](../core_objects/observable/observable_instance_methods/includes.html)
- [`count`](../core_objects/observable/observable_instance_methods/count.html)
- [`elementAt`](../core_objects/observable/observable_instance_methods/elementat.html)
- [`elementAtOrDefault`](../core_objects/observable/observable_instance_methods/elementatordefault.html)
- [`every`](../core_objects/observable/observable_instance_methods/every.html)
- [`find`](../core_objects/observable/observable_instance_methods/find.html)
- [`findIndex`](../core_objects/observable/observable_instance_methods/findindex.html)
- [`first`](../core_objects/observable/observable_instance_methods/first.html)
- [`firstOrDefault`](../core_objects/observable/observable_instance_methods/firstordefault.html)
- [`indexOf`](../core_objects/observable/observable_instance_methods/indexof.html)
- [`isEmpty`](../core_objects/observable/observable_instance_methods/isempty.html)
- [`last`](../core_objects/observable/observable_instance_methods/last.html)
- [`lastOrDefault`](../core_objects/observable/observable_instance_methods/lastordefault.html)
- [`max`](../core_objects/observable/observable_instance_methods/max.html)
- [`maxBy`](../core_objects/observable/observable_instance_methods/maxby.html)
- [`min`](../core_objects/observable/observable_instance_methods/min.html)
- [`minBy`](../core_objects/observable/observable_instance_methods/minby.html)
- [`reduce`](../core_objects/observable/observable_instance_methods/reduce.html)
- [`sequenceEqual`](../core_objects/observable/observable_instance_methods/sequenceequal.html)
- [`single`](../core_objects/observable/observable_instance_methods/single.html)
- [`singleOrDefault`](../core_objects/observable/observable_instance_methods/singleordefault.html)
- [`some`](../core_objects/observable/observable_instance_methods/some.html)
- [`sum`](../core_objects/observable/observable_instance_methods/sum.html)
- [`toMap`](../core_objects/observable/observable_instance_methods/tomap.html)
- [`toSet`](../core_objects/observable/observable_instance_methods/toset.html)
