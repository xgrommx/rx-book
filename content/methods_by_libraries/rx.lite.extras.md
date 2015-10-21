# RxJS Lite Extras #

The Reactive Extensions for JavaScript's lite extras are the operators that are found on `rx.js` and `rx.compat.js` but not available in `rx.lite.js` and `rx.lite.compat.js`.  By adding this file, you will have full access to all operators and thus makes including other files such as `rx.time.js`, `rx.joinpatterns.js` and others easier.

## Details ##

Files:
- [`rx.lite.extras.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.extras.js)

NPM Packages:
- [`rx`](https://www.npmjs.org/package/rx)

NuGet Packages:
- [`RxJS-Lite`](http://www.nuget.org/packages/RxJS-Lite/)

File Dependencies:
- [`rx.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.js) | [`rx.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.compat.js) | [`rx.lite.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.js) | [`rx.lite.compat.js`](https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.lite.compat.js)

## Included Observable Operators ##

### `Observable Methods`
- [`amb`](../observable/observable_methods/amb.html)
- [`generate`](../observable/observable_methods/generate.html)
- [`onErrorResumeNext`](../observable/observable_methods/onerrorresumenext.html)
- [`using`](../observable/observable_methods/using.html)

### `Observable Instance Methods`
- [`amb`](../observable/observable_instance_methods/amb.html)
- [`bufferWithCount`](../observable/observable_instance_methods/bufferwithcount.html)
- [`distinct`](../observable/observable_instance_methods/distinct.html)
- [`observeOn`](../observable/observable_instance_methods/observeon.html)
- [`onErrorResumeNext`](../observable/observable_instance_methods/onerrorresumenext.html)
- [`subscribeOn`](../observable/observable_instance_methods/subscribeon.html)
- [`takeLastBuffer`](../observable/observable_instance_methods/takelastbuffer.html)
- [`windowWithCount`](../observable/observable_instance_methods/windowwithcount.html)
