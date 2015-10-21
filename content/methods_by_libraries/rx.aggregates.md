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
- [`aggregate`](../observable/observable_instance_methods/aggregate.html)
- [`all`](../observable/observable_instance_methods/every.html)
- [`any`](../observable/observable_instance_methods/some.html)
- [`average`](../observable/observable_instance_methods/average.html)
- [`includes`](../observable/observable_instance_methods/includes.html)
- [`count`](../observable/observable_instance_methods/count.html)
- [`elementAt`](../observable/observable_instance_methods/elementat.html)
- [`elementAtOrDefault`](../observable/observable_instance_methods/elementatordefault.html)
- [`every`](../observable/observable_instance_methods/every.html)
- [`find`](../observable/observable_instance_methods/find.html)
- [`findIndex`](../observable/observable_instance_methods/findindex.html)
- [`first`](../observable/observable_instance_methods/first.html)
- [`firstOrDefault`](../observable/observable_instance_methods/firstordefault.html)
- [`indexOf`](../observable/observable_instance_methods/indexof.html)
- [`isEmpty`](../observable/observable_instance_methods/isempty.html)
- [`last`](../observable/observable_instance_methods/last.html)
- [`lastOrDefault`](../observable/observable_instance_methods/lastordefault.html)
- [`max`](../observable/observable_instance_methods/max.html)
- [`maxBy`](../observable/observable_instance_methods/maxby.html)
- [`min`](../observable/observable_instance_methods/min.html)
- [`minBy`](../observable/observable_instance_methods/minby.html)
- [`reduce`](../observable/observable_instance_methods/reduce.html)
- [`sequenceEqual`](../observable/observable_instance_methods/sequenceequal.html)
- [`single`](../observable/observable_instance_methods/single.html)
- [`singleOrDefault`](../observable/observable_instance_methods/singleordefault.html)
- [`some`](../observable/observable_instance_methods/some.html)
- [`sum`](../observable/observable_instance_methods/sum.html)
- [`toMap`](../observable/observable_instance_methods/tomap.html)
- [`toSet`](../observable/observable_instance_methods/toset.html)
