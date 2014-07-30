### <a id="rxdomfromwebworkerurl"></a>`Rx.DOM.fromWebWorker(url)`
<a href="#rxdomfromwebworkerurl">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L434-L456 "View in source") [&#x24C9;][1]

Creates a Web Worker with a given URL as a Subject.

#### Syntax
```js
Rx.DOM.fromWebWorker(url);
```	
#### Arguments
1. `url` *(String)*: The URL of the Web Worker.

#### Returns
*(Subject)*: A Subject which wraps a Web Worker.

#### Example
```js
var worker = Rx.DOM.fromWebWorker('worker.js');

worker.subscribe(function (e) {
	console.log(e.data);
});

worker.onNext('some data');
```