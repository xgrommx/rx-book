# join

`Rx.Observable.prototype.join(right, leftDurationSelector, rightDurationSelector, resultSelector)`
<a href="#rxobservableprototypejoinright-leftdurationselector-rightdurationselector-resultselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.coincidence.js#L332-L420 "View in source") 

Correlates the elements of two sequences based on overlapping durations.

#### Arguments
1. `right` *(`Observable`)*: The right observable sequence to join elements for.
2. `leftDurationSelector` *(`Function`)*: A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
3. `rightDurationSelector` *(`Function`)*: A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
4. `resultSelector` *(`Any`)*: A function invoked to compute a result element for any two overlapping elements of the left and right observable sequences. The parameters are as follows:
    1. *(`Any`)* Element from the left source for which the overlap occurs.
    2. *(`Any`)* Element from the right source for which the overlap occurs.

#### Returns
*(`Observable`)*: An observable sequence that contains result elements computed from source elements that have an overlapping duration.
 
#### Example

[](http://jsbin.com/japur/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx).coincidence.js