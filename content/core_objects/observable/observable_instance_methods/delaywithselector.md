# delayWithSelector

<rx-marbles key="delayWithSelector"></rx-marbles>

`Rx.Observable.delayWithSelector.delay([subscriptionDelay], delayDurationSelector)`
<a href="#rxobservabledelaywithselectordelaysubscriptiondelay-delaydurationselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.time.js#L832-L882 "View in source") 

Time shifts the observable sequence by dueTime. The relative time intervals between the values are preserved.

#### Arguments
1. `[subscriptionDelay]` *(`Observable`)*: Sequence indicating the delay for the subscription to the source. 
2. `delayDurationSelector` *(`Function`)*: Selector function to retrieve a sequence indicating the delay for each given element.

#### Returns
*(`Observable`)*: Time-shifted sequence.
  
#### Example

##### With subscriptionDelay

[](http://jsbin.com/buwaxe/1/embed?js,console)

##### Without subscriptionDelay

[](http://jsbin.com/soheg/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).time.js