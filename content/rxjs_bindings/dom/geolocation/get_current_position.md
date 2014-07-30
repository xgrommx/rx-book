### <a id="rxdomgeolocationgetcurrentpositiongeolocationoptions"></a>`Rx.DOM.Geolocation.getCurrentPosition([geolocationOptions])`
<a href="#rxdomgeolocationgetcurrentpositiongeolocationoptions">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L688-L702 "View in source") [&#x24C9;][1]

Obtains the geographic position, in terms of latitude and longitude coordinates, of the device.

#### Arguments
1. `[geolocationOptions]` *(Object)*: An object literal to specify one or more of the following attributes and desired values:
     - enableHighAccuracy: Specify true to obtain the most accurate position possible, or false to optimize in favor of performance and power consumption.
     - timeout: An Integer value that indicates the time, in milliseconds, allowed for obtaining the position.
        If timeout is Infinity, (the default value) the location request will not time out.
        If timeout is zero (0) or negative, the results depend on the behavior of the location provider.
     - maximumAge: An Integer value indicating the maximum age, in milliseconds, of cached position information.
        If maximumAge is non-zero, and a cached position that is no older than maximumAge is available, the cached position is used instead of obtaining an updated location.
        If maximumAge is zero (0), watchPosition always tries to obtain an updated position, even if a cached position is already available.
        If maximumAge is Infinity, any cached position is used, regardless of its age, and watchPosition only tries to obtain an updated position if no cached position data exists.

#### Returns
*(Observable)*: An observable sequence with the current geographical location of the device running the client.

#### Example
```js
var source = Rx.DOM.Geolocation.getCurrentPosition();

var subscription = source.subscribe(
	function (pos) {
		console.log('Next:' + position.coords.latitude + ',' + position.coords.longitude);
	},
	function (err) {
		var message = '';
		switch (err.code) {
			case err.PERMISSION_DENIED:
				message = 'Permission denied';
				break;
			case err.POSITION_UNAVAILABLE:
				message = 'Position unavailable';
				break;
			case err.PERMISSION_DENIED_TIMEOUT:
				message = 'Position timeout';
				break;
		}
		console.log('Error: ' + message);
	},
	function () {
		console.log('Completed');
	});
```