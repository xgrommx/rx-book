## Why RxJS? ##

<!-- toc -->

One question you may ask yourself, is why RxJS?  What about Promises?  Promises are good for solving asynchronous operations such as querying a service with an [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), where the expected behavior is one value and then completion.  The Reactive Extensions for JavaScript unifies both the world of Promises, callbacks as well as evented data such as DOM Input, Web Workers, Web Sockets.  Once we have unified these concepts, this enables rich composition.

To give you an idea about rich composition, we can create an autocompletion service which takes the user input from a text input and then query a service, making sure not to flood the service with calls for every key stroke, but instead allow to go at a more natural pace.

First, we'll reference the JavaScript files, including jQuery, although RxJS has no dependencies on jQuery...
```html
<script src="http://code.jquery.com/jquery.js"></script>ffffffff
<script src="rx.lite.js"></script>
```
Next, we'll get the user input from an input, listening to the keyup event by using the [`Rx.Observable.fromEvent`](content/observable/observable_methods/fromevent.html) method.  This will either use the event binding from [jQuery](http://jquery.com), [Zepto](http://zeptojs.com/), [AngularJS](https://angularjs.org/) and [Ember.js](http://emberjs.com/) if available, and if not, falls back to the native event binding.  This gives you consistent ways of thinking of events depending on your framework, so there are no surprises.

[import](content/code_examples/why_rx/part1.js)

Now, let's query Wikipedia!  In RxJS, we can instantly bind to any [Promises A+](https://github.com/promises-aplus/promises-spec) implementation through the [`Rx.Observable.fromPromise`](content/observable/observable_methods/frompromise.html) method or by just directly returning it, and we wrap it for you.

```js
function searchWikipedia (term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}
```

Once that is created, now we can tie together the distinct throttled input and then query the service.  In this case, we'll call [`flatMapLatest`](content/observable/observable_instance_methods/flatmaplatest.html) to get the value and ensure that we're not introducing any out of order sequence calls.

```js
var suggestions = distinct.flatMapLatest(searchWikipedia);
```

Finally, we call the subscribe method on our observable sequence to start pulling data.

```js
suggestions.subscribe(data => {
    var res = data[1];

    /* Do something with the data like binding */
    $results.empty();

    $.each(res, (_, value) => $('<li>' + value + '</li>').appendTo($results));
}, error => {
    /* handle any errors */
    $results.empty();

    $('<li>Error: ' + error + '</li>').appendTo($results);
});
```
