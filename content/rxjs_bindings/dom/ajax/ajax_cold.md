### <a id="rxdomrequestajaxcoldurl--settings"></a>`Rx.DOM.Request.ajaxCold(url | settings)`
<a href="#rxdomrequestajaxcoldurl--settings">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L145-L204 "View in source") [&#x24C9;][1]

Creates a cold observable for an Ajax request with either a settings object with url, headers, etc or a string for a URL.

#### Syntax
```js
// Using string URL
Rx.DOM.Request.ajaxCold(url);

// Using settings object
Rx.DOM.Request.ajaxCold(settings);
```
#### Arguments
1. `url` *(String)*: A string of the URL to make the Ajax call.
1. `settings` *(Object)*: An object with the following properties
  	
		- `url` *(String)*: URL of the request
  		- `method` *(String)*: Method of the request, such as GET, POST, PUT, PATCH, DELETE
  		- `async` *(Boolean)*: Whether the request is async
  		- `headers` *(Object)*: Optional headers

#### Returns
*(Observable)*: An observable sequence containing the `XMLHttpRequest`.

#### Example

The following example uses a simple URL to retrieve a list of products. 
```js
Rx.DOM.Request.ajaxCold('/products')
	.subscribe( 
		function (xhr) {

			var products = JSON.parse(xhr.responseText);

			products.forEach(function (product) {
				console.log(product);
			});
		},
		function (error) {
			// Log the error
		}
	);
```