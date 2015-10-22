## [`DOM`]() *(plugin [`RxJS-DOM`](https://github.com/Reactive-Extensions/RxJS-DOM))*

Reactive Extensions (Rx) is a library for composing asynchronous and event-based programs using observable sequences and LINQ-style query operators.

Data sequences can take many forms, such as a stream of data from a file or web service, web services requests, system notifications, or a series of events such as user input.

Reactive Extensions represents all these data sequences as observable sequences. An application can subscribe to these observable sequences to receive asynchronous notifications as new data arrive. 

This library provides bridges to common DOM related features such as events, Ajax requests, JSONP requests, and HTML5 features like WebSockets, Web Workers, Geolocation, MutationObservers and more.

## Reactive Extensions Binding for the DOM (RxJS-DOM) API

This section contains the reference documentation for the Reactive Extensions for the DOM class library.

Ajax

- [`Rx.DOM.Request.ajax`](#rxdomrequestajaxurl--settings)
- [`Rx.DOM.Request.ajaxCold`](#rxdomrequestajaxcoldurl--settings)
- [`Rx.DOM.Request.get`](#rxdomrequestgeturl)
- [`Rx.DOM.Request.getJSON`](#rxdomrequestgetjsonurl)
- [`Rx.DOM.Request.post`](#rxdomrequestposturl-body)

JSONP

- [`Rx.DOM.Request.jsonpRequest`](#rxdomrequestjsonprequesturl--settings)
- [`Rx.DOM.Request.jsonpRequestCold`](#rxdomrequestjsonprequestcoldurl--settings)

Web Sockets

- [`Rx.DOM.fromWebSocket`](#rxdomfromwebsocketurl-protocol-observeroronnext)

Web Workers

- [`Rx.DOM.fromWebWorker`](#rxdomfromwebworkerurl)

Mutation Observers

- [`Rx.DOM.fromMutationObserver`](#rxdomfrommutationobservertarget-options)

Geolocation

- [`Rx.DOM.Geolocation.getCurrentPosition`](#rxdomgeolocationgetcurrentpositiongeolocationoptions)
- [`Rx.DOM.Geolocation.watchPosition`](#rxdomgeolocationwatchpositiongeolocationoptions)

Schedulers

- [`Rx.Schedulers.requestAnimationFrame`](#rxschedulerrequestanimationframescheduler)
- [`Rx.Schedulers.mutationObserver`](#rxschedulermutationobserverscheduler)

##### Example

[](http://jsbin.com/qemah/1/embed?js,output)