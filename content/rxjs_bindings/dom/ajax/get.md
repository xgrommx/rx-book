### <a id="rxdomrequestgeturl"></a>`Rx.DOM.Request.get(url)`
<a href="#rxdomrequestgeturl">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L248-L250 "View in source") [&#x24C9;][1]

Creates an observable sequence from an Ajax GET Request with the body.  This method is just shorthand for the `Rx.DOM.Request.ajax` method with the GET method.

#### Arguments
1. `url` *(String)*: A string of the URL to make the Ajax call.

#### Returns
*(Observable)*: The observable sequence which contains the response from the Ajax GET.

#### Example
```js
Rx.DOM.Request.get('/products')
	.subscribe(
		function (xhr) {
			var text = xhr.responseText;
			console.log(text);
		},
		function (err) {
			// Log the error
		}
	);
```