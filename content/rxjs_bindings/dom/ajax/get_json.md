### <a id="rxdomrequestgetjsonurl"></a>`Rx.DOM.Request.getJSON(url)`
<a href="#rxdomrequestgetjsonurl">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L259-L264 "View in source") [&#x24C9;][1]

Creates an observable sequence from JSON from an Ajax request.

#### Arguments
1. `url` *(String)*: A string of the URL to make the Ajax call.

#### Returns
*(Observable)*: The observable sequence which contains the parsed JSON.

#### Example
```js
Rx.DOM.Request.get('/products')
	.subscribe(
		function (data) {
			// Log data length
			console.log(data.length);
		},
		function (err) {
			// Log the error
		}
	);
```