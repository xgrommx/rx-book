## [`Rx.Observable.prototype.exclusive()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/linq/observable/exclusive.js)

Performs a exclusive map waiting for the first to finish before subscribing to another observable.

Observables that come in between subscriptions will be dropped on the floor.

#### Returns
*(`Observable`)*: An exclusive observable with only the results that happen when subscribed.

#### Example