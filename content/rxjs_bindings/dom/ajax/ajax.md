### <a id="#rxdomrequestajaxurl--settings"></a>`Rx.DOM.Request.ajax(url | settings)`
<a href="#rxdomrequestajaxurl--settings">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L227-L229 "View in source") [&#x24C9;][1]

Creates a hot observable for an Ajax request with either a settings object with url, headers, etc or a string for a URL.

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
Rx.DOM.Request.ajax('/products')
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