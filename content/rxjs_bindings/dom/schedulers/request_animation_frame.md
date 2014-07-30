### <a id="rxschedulerrequestanimationframe"></a>`Rx.Scheduler.requestAnimationFrame`
<a href="#rxschedulerrequestanimationframe">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L471-L485 "View in source") [&#x24C9;][1]

Gets a scheduler that schedules schedules work on the `window.requestAnimationFrame` for immediate actions.

#### Example
```js
var obs = Rx.Observable.return(
	42, 
	Rx.Scheduler.requestAnimationFrame);

obs.subscribe(function (x) {
	// Scheduled using requestAnimationFrame
	console.log(x);
});

// => 42
```