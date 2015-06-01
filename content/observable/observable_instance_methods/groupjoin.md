# groupJoin

`Rx.Observable.prototype.groupJoin(right, leftDurationSelector, rightDurationSelector, resultSelector)`
<a href="#rxobservableprototypegroupjoinright-leftdurationselector-rightdurationselector-resultselector">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.coincidence.js#L431-L563 "View in source") 

Correlates the elements of two sequences based on overlapping durations, and groups the results.

#### Arguments
1. `right` *(`Observable`)*: The right observable sequence to join elements for.
2. `leftDurationSelector` *(`Function`)*: A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
3. `rightDurationSelector` *(`Function`)*: A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
4. `resultSelector` *(`Any`)*: A function invoked to compute a result element for any element of the left sequence with overlapping elements from the right observable sequence. It has the following arguments
    1. *(`Any`)* An element of the left sequence. 
    2. *(`Observable`)* An observable sequence with elements from the right sequence that overlap with the left sequence's element.

#### Returns
*(`Observable`)*: An observable sequence that contains result elements computed from source elements that have an overlapping duration.

#### Example

[](http://jsbin.com/gebas/1/embed?js,console)

#### Location

- [`rx`](https://www.npmjs.org/package/rx)