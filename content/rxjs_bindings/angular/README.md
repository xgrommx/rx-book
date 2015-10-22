## [`AngularJS`](https://angularjs.org/) *(plugin [`rx.angular.js`](https://github.com/Reactive-Extensions/rx.angular.js))*

Reactive Extensions (Rx) is a library for composing asynchronous and event-based programs using observable sequences and Array#extras style operators.

Data sequences can take many forms, such as a stream of data from a file or web service, web services requests, system notifications, or a series of events such as user input.

Reactive Extensions represents all these data sequences as observable sequences. An application can subscribe to these observable sequences to receive asynchronous notifications as new data arrive. 

This library provides bridges to the popular [Angular JS](http://angularjs.org) library.

## Reactive Extensions Binding for the AngularJS API

This section contains the reference documentation for the Reactive Extensions for AngularJS library.

Factories:
- [`rx`](#rx)
- [`observeOnScope`](#observeonscopescope-watchexpression-objectequality)

Observable Methods:
- [`safeApply`](#safeapplyscope-fn)

[`$rootScope`](http://docs.angularjs.org/api/ng.$rootScope) Methods:
- [`$createObservableFunction`](#createobservablefunctionfunctionname-listener)
- [`$toObservable`](#toobservablewatchexpression-objectequality)
- [`$eventToObservable`](#eventtoobservable)