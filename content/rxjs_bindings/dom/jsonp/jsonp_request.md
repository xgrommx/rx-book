### <a id="rxdomrequestjsonprequesturl--settings"></a>`Rx.DOM.Request.jsonpRequest(url | settings)`
<a href="#rxdomrequestjsonprequesturl--settings">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L366-L368 "View in source") [&#x24C9;][1]

Creates a hot observable JSONP Request with the specified settings or a string URL.  **Note when using the method with a URL, it must contain JSONPRequest=?.**

#### Syntax

This method has two versions, one with a string URL, the other with a settings object.
```js
// With a string URL
Rx.DOM.Request.jsonpRequest(url);

// With a settings object
Rx.DOM.Request.jsonpRequest(settings);
```
#### Arguments
1. `url` *(String)*: A string of the URL to make the JSONP call.
1. `settings` *(Object)*: An object with the following properties:
		- `url` *(String)*: URL of the request
  		- `jsonp` *(String)*: The named callback parameter for the JSONP call

#### Returns
*(Observable)*: A hot observable containing the results from the JSONP call.

#### Example

The following example uses a simple URL to retrieve a list of entries from Wikipedia. 

```js
var url = 'http://en.wikipedia.org/w/api.php?action=opensearch'
	+ '&format=json' 
	+ '&search=reactive';

Rx.DOM.Request.jsonpRequest(url)
	.subscribe( 
		function (data) {
			data[1].forEach(function (item) {
				console.log(item);
			});
		},
		function (error) {
			// Log the error
		}
	);
```