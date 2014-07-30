### <a id="rxschedulermutationobserver"></a>`Rx.Scheduler.mutationObserver`
<a href="#rxschedulermutationobserver">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L516-L566 "View in source") [&#x24C9;][1]

Gets a scheduler that schedules schedules work on the `window.MutationObserver` for immediate actions.

#### Example
```js
var obs = Rx.Observable.return(
	42, 
	Rx.Scheduler.mutationObserver);

obs.subscribe(function (x) {
	// Scheduled using a MutationObserver
	console.log(x);
});

// => 42
```