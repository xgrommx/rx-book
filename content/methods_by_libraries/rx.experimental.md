# RxJS Experimental Module #

The Reactive Extensions for JavaScript has a number of operators that are considered experimental and not ready for mainstream usage.  This includes imperative operators such as `if`, `case`, `for`, `while`, `doWhile` as well as operators such as `forkJoin`.

## Details ##

Files:
- [`rx.experimental.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.experimental.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-All`](http://www.nuget.org/packages/RxJS-All/)
- [`RxJS-Experimental`](http://www.nuget.org/packages/RxJS-Experimental/)

File Dependencies:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.compat.js)

NuGet Dependencies:
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)
- [`RxJS-Main`](http://www.nuget.org/packages/RxJS-Main/)

## Included Observable Operators ##

### `Observable Methods`
- [`case | switchCase`](../core_objects/observable/observable_methods/case.html)
- [`for | forIn`](../core_objects/observable/observable_methods/for.html)
- [`forkJoin`](../core_objects/observable/observable_methods/forkjoin.html)
- [`if | ifThen`](../core_objects/observable/observable_methods/if.html)
- [`while | whileDo`](../core_objects/observable/observable_methods/while.html)

### `Observable Instance Methods`
- [`doWhile`](../core_objects/observable/observable_instance_methods/dowhile.html)
- [`expand`](../core_objects/observable/observable_instance_methods/expand.html)
- [`extend`](../core_objects/observable/observable_instance_methods/manyselect.html)
- [`forkJoin`](../core_objects/observable/observable_instance_methods/forkjoin.html)
- [`let | letBind`](../core_objects/observable/observable_instance_methods/let.html)
- [`manySelect`](../core_objects/observable/observable_instance_methods/manyselect.html)
