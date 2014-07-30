### <a id="rxdomfromwebsocketurl-protocol-observeroronnext"></a>`Rx.DOM.fromWebSocket(url, protocol, [observerOrOnNext])`
<a href="#rxdomfromwebsocketurl-protocol-observeroronnext">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L382-L420 "View in source") [&#x24C9;][1]

Creates a WebSocket Subject with a given URL, protocol and an optional observer for the open event.

#### Arguments
1. `url` *(String)*: The URL of the WebSocket.
2. `protocol` *(String)*: The protocol of the WebSocket.
3. `[observerOrOnNext]` *(Rx.Observer|Function)*: An optional Observer or onNext function to capture the open event.

#### Returns
*(Subject)*: A Subject which wraps a WebSocket.

#### Example
```js
// Using a function for the open
var socket = Rx.DOM.fromWebSocket(
	'http://localhost:8080', 
	'protocol', 
	function (e) {
		console.log('Opening');
	})

socket.subscribe(function (next) {
	console.log('Received data: ' + next);
});

socket.onNext('data');

// Using an observer for the open
var observer = Rx.Observer.create(function (e) {
	console.log('Opening');
});

var socket = Rx.DOM.fromWebSocket(
	'http://localhost:8080', 'protocol', observer)

socket.subscribe(function (next) {
	console.log('Received data: ' + next);
});

socket.onNext('data');
```