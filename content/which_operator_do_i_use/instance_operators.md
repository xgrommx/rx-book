# Which Operator to Use? - Instance Operators #

Use this page to find the instance operator implemented by the [`Observable`](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md) type that fits your needs:

<table style="display: table">
<thead>Instance methods</thead>
<tbody>
    <!-- Observable operators -->
    <tr>
        <td rowspan="71">Using an existing sequence</td>
        <td colspan="3">I want to change each value</td>
        <td><a href="../observable/observable_instance_methods/select.html">map/select</a></td>
    </tr>
    <tr>
        <td colspan="3">I want to pull a property off each value</td>
        <td><a href="../observable/observable_instance_methods/pluck.html">pluck</a></td>
    </tr>
    <tr>
        <td colspan="3">I want to be notified of values without affecting them</td>
        <td><a href="../observable/observable_instance_methods/do.html">do/tap</a><br>
            <a href="../observable/observable_instance_methods/doonnext.html">doOnNext/tapOnNext</a><br>
            <a href="../observable/observable_instance_methods/doonerror.html">doOnError/tapOnError</a><br>
            <a href="../observable/observable_instance_methods/dooncompleted.html">doOnCompleted/tapOnCompleted</a></td>
    </tr>
    <tr>
        <td rowspan="6">I want to include values</td>
        <td colspan="2">based on custom logic</td>
        <td><a href="../observable/observable_instance_methods/where.html">filter/where</a></td>
    </tr>
    <tr>
        <td rowspan="2">from the start of the sequence</td>
        <td></td>
        <td><a href="../observable/observable_instance_methods/take.html">take</a></td>
    </tr>
    <tr>
        <td>based on custom logic</td>
        <td><a href="../observable/observable_instance_methods/takewhile.html">takeWhile</a></td>
    </tr>
    <tr>
    </tr>
    <tr>
        <td colspan="2">from the end of the sequence</td>
        <td><a href="../observable/observable_instance_methods/takelast.html">takeLast</a></td>
    </tr>
    <tr>
        <td colspan="2">until another sequence emits a value or completes</td>
        <td><a href="../observable/observable_instance_methods/takeuntil.html">takeUntil</a></td>
    </tr>
    <tr>
        <td rowspan="7">I want to ignore values</td>
        <td colspan="2">altogether</td>
        <td><a href="../observable/observable_instance_methods/ignoreelements.html">ignoreElements</a></td>
    </tr>
    <tr>
        <td rowspan="2">from the start of the sequence</td>
        <td></td>
        <td><a href="../observable/observable_instance_methods/skip.html">skip</a></td>
    </tr>
    <tr>
        <td>based on custom logic</td>
        <td><a href="../observable/observable_instance_methods/skipwhile.html">skipWhile</a></td>
    </tr>
    <tr>
        <td colspan="2">from the end of the sequence</td>
        <td><a href="../observable/observable_instance_methods/skiplast.html">skipLast</a></td>
    </tr>
    <tr>
        <td colspan="2">until another sequence emits a value</td>
        <td><a href="../observable/observable_instance_methods/skipuntil.html">skipUntil</a></td>
    </tr>
    <tr>
        <td colspan="2">that have the same value as the previous</td>
        <td><a href="../observable/observable_instance_methods/distinctuntilchanged.html">distinctUntilChanged</a></td>
    </tr>
    <tr>
        <td colspan="2">that occur too frequently</td>
        <td><a href="../observable/observable_instance_methods/throttle.html">throttle</a></td>
    </tr>
    <tr>
        <td rowspan="4">I want to compute</td>
        <td>the sum</td>
        <td rowspan="2">of its values</td>
        <td><a href="../observable/observable_instance_methods/sum.html">sum</a></td>
    </tr>
    <tr>
        <td>the average</td>
        <td><a href="../observable/observable_instance_methods/average.html">average</a></td>
    </tr>
    <tr>
        <td rowspan="2">using custom logic</td>
        <td>and only output the final value</td>
        <td><a href="../observable/observable_instance_methods/aggregate.html">aggregate</a><br>
            <a href="../observable/observable_instance_methods/reduce.html">reduce</a>
        </td>
    </tr>
    <tr>
        <td>and output the values as they are calculated</td>
        <td><a href="../observable/observable_instance_methods/scan.html">scan</a></td>
    </tr>
    <tr>
        <td rowspan="3">I want to wrap its messages with metadata</td>
        <td colspan="2">that describes each message</td>
        <td><a href="../observable/observable_instance_methods/materialize.html">materialize</a></td>
    </tr>
    <tr>
        <td colspan="2">that includes the time past since the last value</td>
        <td><a href="../observable/observable_instance_methods/timeinterval.html">timeInterval</a></td>
    </tr>
    <tr>
        <td colspan="2">that includes a timestamp</td>
        <td><a href="../observable/observable_instance_methods/timestamp.html">timestamp</a></td>
    </tr>
    <tr>
        <td rowspan="2">after a period of inactivity</td>
        <td colspan="2">I want to throw an error</td>
        <td><a href="../observable/observable_instance_methods/timeout.html">timeout</a></td>
    </tr>
    <tr>
        <td colspan="2">I want to switch to another sequence</td>
        <td><a href="../observable/observable_instance_methods/timeout.html">timeout</a></td>
    </tr>
    <tr>
        <td rowspan="2">I want ensure there is only one value</td>
        <td colspan="2">and throw an error if there are more or less than one value</td>
        <td><a href="../observable/observable_instance_methods/single.html">single</a></td>
    </tr>
    <tr>
        <td colspan="2">and use the default value if there are no values</td>
        <td><a href="../observable/observable_instance_methods/singleordefault.html">singleOrDefault</a></td>
    </tr>
    <tr>
        <td rowspan="3">I want to only take the first value</td>
        <td colspan="2">and throw an error if there are no values</td>
        <td><a href="../observable/observable_instance_methods/first.html">first</a></td>
    </tr>
    <tr>
        <td colspan="2">and use the default value if there are no values</td>
        <td><a href="../observable/observable_instance_methods/firstordefault.html">firstOrDefault</a></td>
    </tr>
    <tr>
        <td colspan="2">within a time period</td>
        <td><a href="../observable/observable_instance_methods/sample.html">sample</a></td>
    </tr>
    <tr>
        <td rowspan="2">I want to only take the last value</td>
        <td colspan="2">and error if there are no values</td>
        <td><a href="../observable/observable_instance_methods/last.html">last</a></td>
    </tr>
    <tr>
        <td colspan="2">and use the default value if there are no values</td>
        <td><a href="../observable/observable_instance_methods/lastordefault.html">lastOrDefault</a></td>
    </tr>
    <tr>
        <td colspan="3">I want to know how many values it contains</td>
        <td><a href="../observable/observable_instance_methods/count.html">count</a></td>
    </tr>
    <tr>
        <td colspan="3">I want to know if it includes a value</td>
        <td><a href="../observable/observable_instance_methods/includes.html">contains</a></td>
    </tr>
    <tr>
        <td rowspan="2">I want to know if a condition is satisfied</td>
        <td colspan="2">by any of its values</td>
        <td><a href="../observable/observable_instance_methods/any.html">any/some</a></td>
    </tr>
    <tr>
        <td colspan="2">by all of its values</td>
        <td><a href="../observable/observable_instance_methods/every.html">all/every</a></td>
    </tr>
    <tr>
        <td rowspan="2" colspan="2">I want to delay messages by a specific amount of time</td>
        <td></td>
        <td><a href="../observable/observable_instance_methods/delay.html">delay</a></td>
    </tr>
    <tr>
        <td>based on custom logic</td>
        <td><a href="../observable/observable_instance_methods/delaywithselector.html">delayWithSelector</a></td>
    </tr>
    <tr>
        <td rowspan="11">I want to group the values</td>
        <td colspan="2">until the sequence completes</td>
        <td>
          <a href="../observable/observable_instance_methods/toarray.html">toArray</a><br>
          <a href="../observable/observable_instance_methods/tomap.html">toMap</a><br>
          <a href="../observable/observable_instance_methods/toset.html">toSet</a>
        </td>
    </tr>
    <tr>
        <td rowspan="2">using custom logic</td>
        <td>as arrays</td>
        <td><a href="../observable/observable_instance_methods/buffer.html">buffer</a></td>
    </tr>
    <tr>
        <td>as sequences</td>
        <td><a href="../observable/observable_instance_methods/window.html">window</a></td>
    </tr>
    <tr>
        <td rowspan="2">in batches of a particular size</td>
        <td>as arrays</td>
        <td><a href="../observable/observable_instance_methods/bufferwithcount.html">bufferWithCount</a></td>
    </tr>
    <tr>
        <td>as sequences</td>
        <td><a href="../observable/observable_instance_methods/windowwithcount.html">windowWithCount</a></td>
    </tr>
    <tr>
        <td rowspan="2">based on time</td>
        <td>as arrays</td>
        <td><a href="../observable/observable_instance_methods/bufferwithtime.html">bufferWithTime</a></td>
    </tr>
    <tr>
        <td>as sequences</td>
        <td><a href="../observable/observable_instance_methods/windowwithtime.html">windowWithTime</a></td>
    </tr>
    <tr>
        <td rowspan="2">based on time or count, whichever happens first</td>
        <td>as arrays</td>
        <td><a href="../observable/observable_instance_methods/bufferwithtimeorcount.html">bufferWithTimeOrCount</a></td>
    </tr>
    <tr>
        <td>as sequences</td>
        <td><a href="../observable/observable_instance_methods/windowwithtimeorcount.html">windowWithTimeOrCount</a></td>
    </tr>
    <tr>
        <td rowspan="2">based on a key</td>
        <td>until the sequence completes</td>
        <td><a href="../observable/observable_instance_methods/groupby.html">groupBy</a></td>
    </tr>
    <tr>
        <td>and control the lifetime of each group</td>
        <td><a href="../observable/observable_instance_methods/groupbyuntil.html">groupByUntil</a></td>
    </tr>
    <tr>
        <td rowspan="6">I want to start a new sequence for each value</td>
        <td colspan="2">and emit the values from all sequences in parallel</td>
        <td><a href="../observable/observable_instance_methods/selectmany.html">flatMap/selectMany</a></td>
    </tr>
    <tr>
        <td colspan="2">and emit the values from each sequence in order</td>
        <td><a href="../observable/observable_instance_methods/concatmap.html">concatMap/selectConcat</a></td>
    </tr>
    <tr>
        <td colspan="2">and cancel the previous sequence when a new value arrives</td>
        <td><a href="../observable/observable_instance_methods/flatmaplatest.html">flatMapLatest/selectSwitch</a></td>
    </tr>
    <tr>
        <td colspan="2">and recursively start a new sequence for each new value</td>
        <td><a href="../observable/observable_instance_methods/expand.html">expand</a></td>
    </tr>
    <tr>
        <td colspan="2">and emit values from all sequences depending for onNext, onError, and onCompleted in parallel</td>
        <td><a href="../observable/observable_instance_methods/flatmapobserver.html">flatMapObserver/selectManyObserver</a></td>
    </tr>
    <tr>
        <td colspan="2">and emit values from all sequences depending for onNext, onError, and onCompleted in order</td>
        <td><a href="../observable/observable_instance_methods/flatmapobserver.html">concatMapObserver/selectConcatObserver</a></td>
    </tr>
    <tr>
        <td>I want to combine it with another</td>
        <td colspan="2">And be notified when both have completed</td>
        <td><a href="../observable/observable_instance_methods/forkjoin.html">forkJoin</a></td>
    </tr>
    <tr>
        <td colspan="3">I want to perform complex operations without breaking the fluent calls</td>
        <td><a href="../observable/observable_instance_methods/let.html">let</a></td>
    </tr>
    <tr>
        <td rowspan="5">I want to share a subscription between multiple subscribers</td>
        <td colspan="2">using a specific subject implementation</td>
        <td><a href="../observable/observable_instance_methods/multicast.html">multicast</a></td>
    </tr>
    <tr>
        <td colspan="2"></td>
        <td>
          <a href="../observable/observable_instance_methods/publish.html">publish</a><br>
          <a href="../observable/observable_instance_methods/share.html">share</a>
        </td>
    </tr>
    <tr>
        <td colspan="2">and supply the last value to future subscribers</td>
        <td>
          <a href="../observable/observable_instance_methods/publishlast.html">publishLast</a><br>
          <a href="../observable/observable_instance_methods/sharelast.html">shareLast</a>
        </td>
    </tr>
    <tr>
        <td colspan="2">and replay a default or the latest value to future subscribers</td>
        <td>
          <a href="../observable/observable_instance_methods/publishvalue.html">publishValue</a><br>
          <a href="../observable/observable_instance_methods/sharevalue.html">shareValue</a>
        </td>
    </tr>
    <tr>
        <td colspan="2">and replay <em>n</em> number of values to future subscribers</td>
        <td>
          <a href="../observable/observable_instance_methods/publish.html">replay</a><br>
          <a href="../observable/observable_instance_methods/share.html">shareReplay</a>
        </td>
    </tr>
    <tr>
        <td rowspan="3">when an error occurs</td>
        <td colspan="2">I want to re-subscribe</td>
        <td><a href="../observable/observable_instance_methods/retry.html">retry</a></td>
    </tr>
    <tr>
        <td rowspan="2">I want to start a new sequence</td>
        <td></td>
        <td><a href="../observable/observable_instance_methods/catch.html">catch</a></td>
    </tr>
    <tr>
        <td>that depends on the error</td>
        <td><a href="../observable/observable_instance_methods/catch.html">catch</a></td>
    </tr>
    <tr>
        <td rowspan="2">when it completes</td>
        <td colspan="2">I want to re-subscribe</td>
        <td><a href="../observable/observable_instance_methods/repeat.html">repeat</a></td>
    </tr>
    <tr>
        <td colspan="2">I want to start a new sequence</td>
        <td><a href="../observable/observable_instance_methods/concat.html">concat</a></td>
    </tr>
    <tr>
        <td>when it completes or errors</td>
        <td colspan="2">I want to start a new sequence</td>
        <td><a href="../observable/observable_instance_methods/onerrorresumenext.html">onErrorResumeNext</a></td>
    </tr>
    <tr>
        <td>when it completes, errors or unsubscribes</td>
        <td colspan="2">I want to execute a function</td>
        <td><a href="../observable/observable_instance_methods/finally.html">finally</a></td>
    </tr>
    <tr>
        <td rowspan="2">I want to change the scheduler that routes</td>
        <td colspan="2">calls to subscribe</td>
        <td><a href="../observable/observable_instance_methods/subscribeon.html">subscribeOn</a></td>
    </tr>
    <tr>
        <td colspan="2">messages</td>
        <td><a href="../observable/observable_instance_methods/observeon.html">observeOn</a></td>
    </tr>
    <tr>
        <td rowspan="9">Using two sequences</td>
        <td>I want to decide which to receive values from</td>
        <td colspan="2">based on which one has values first</td>
        <td><a href="../observable/observable_instance_methods/amb.html">amb</a></td>
    </tr>
    <tr>
        <td colspan="3">I want to determine if their values are equal</td>
        <td><a href="../observable/observable_instance_methods/sequenceequal.html">sequenceEqual</a></td>
    </tr>
    <tr>
        <td rowspan="5">I want to combine their values</td>
        <td colspan="2">only when the first sequence emits, using the latest value from each</td>
        <td><a href="../observable/observable_instance_methods/withlatestfrom.html">withLatestFrom</a></td>
    </tr>
    <tr>
        <td rowspan="2">in order</td>
        <td>reusing the latest value when unchanged</td>
        <td><a href="../observable/observable_instance_methods/combinelatest.html">combineLatest</a></td>
    </tr>
    <tr>
        <td>using each value only once</td>
        <td><a href="../observable/observable_instance_methods/zip.html">zip</a></td>
    </tr>
    <tr>
        <td rowspan="2">that share overlapping &#8220;lifetime&#8221; that I choose</td>
        <td>and be notified for each combination</td>
        <td><a href="../observable/observable_instance_methods/join.html">join</a></td>
    </tr>
    <tr>
        <td>and be given a sequence of &#8220;rights&#8221; for each &#8220;left&#8221;</td>
        <td><a href="../observable/observable_instance_methods/groupjoin.html">groupJoin</a></td>
    </tr>
    <tr>
        <td colspan="3">I want to include values from both</td>
        <td><a href="../observable/observable_instance_methods/merge.html">merge</a></td>
    </tr>
</tbody></table>

## See Also ##

*Reference*
 - [`Observable`](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md)

*Concepts*
- [Querying Observable Sequences](querying.md)
- [Operators By Category](categories.md)
