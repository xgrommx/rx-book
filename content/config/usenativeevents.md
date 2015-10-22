## [`Rx.config.useNativeEvents`]()

Determines whether the [`fromEvent`](../observable/observable_methods/fromevent.html) method uses native DOM events only and disregards the referenced supported libraries such as [jQuery](http://jquery.com/), [Zepto.js](http://zeptojs.com/), [AngularJS](https://angularjs.org/), [Ember.js](http://emberjs.com/) and [Backbone.js](http://backbonejs.org)

#### Example

For example, we could have jQuery referenced as part of our project, however, we only want native DOM events.

```html
<script src="jquery.js"></script>
<script src="rx.lite.js"></script>
```

We can do this by setting the `Rx.config.useNativeEvents` flag to `true`.

```js
Rx.config.useNativeEvents = true;

Rx.Observable.fromEvent(document, 'mousemove')
  .subscribe(e => console.log('ClientX: %d, ClientY: %d', e.clientX, e.clientY));
```