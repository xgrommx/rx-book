### <a id="rxdomfrommutationobservertarget-options"></a>`Rx.DOM.fromMutationObserver(target, options)`
<a href="#rxdomfrommutationobservertarget-options">#</a>[&#x24C8;](https://github.com/Reactive-Extensions/RxJS-DOM/blob/master/rx.dom.js#L471-L485 "View in source") [&#x24C9;][1]

Creates an observable sequence from a `MutationObserver`.  The `MutationObserver` provides developers a way to react to changes in a DOM.  This requires `MutationObserver` to be supported in your browser/JavaScript runtime.

#### Arguments
1. `target` *(Node)*: The Node on which to obserave DOM mutations.
2. `options` *(MutationObserverInit)*: A [`MutationObserverInit`](http://msdn.microsoft.com/en-us/library/windows/apps/dn252345.aspx) object, specifies which DOM mutations should be reported.

#### Returns
*(Observable)*: An observable sequence which contains mutations on the given DOM target.

#### Example
```js
var foo = document.getElementById('foo');

var obs = Rx.DOM.fromMutationObserver(foo, { 
	attributes: true, 
	childList: true, 
	characterData: true,
	attributeFilter: ["id", "dir"]
});

foo.dir = 'rtl';

// Listen for mutations
obs.subscribe(function (mutations) {
    mutations.forEach(function(mutation) {
		console.log("Type of mutation: " + mutation.type);

		if ("attributes" === mutation.type) {
			console.log("Old attribute value: " + mutationRecord.oldValue);
		}
	});
});
```