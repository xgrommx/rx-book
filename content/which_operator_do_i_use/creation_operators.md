# Which Operator to Use? - Creation Operators #

Use this page to find the creation operator implemented by the [`Observable`](../observable/observable_methods/index.html) type that fits your needs:

<table style="display: table">
<thead>Static methods</thead>
<tbody>
    <!-- Observable factories -->
    <tr>
        <td rowspan="26">I want to create a new sequence</td>
        <td rowspan="4">using custom logic</td>
        <td colspan="2"></td>
        <td>
            <a href="../observable/observable_methods/create.html">Observable.create</a>
        </td>
    </tr>
    <tr>
        <td rowspan="3">that works like a for-loop</td>
        <td></td>
        <td><a href="../observable/observable_methods/generate.html">Observable.generate</a></td>
    </tr>
    <tr>
        <td rowspan="2">and emits the values over time</td>
        <td><a href="../observable/observable_methods/generatewithrelativetime.html">Observable.generateWithRelativeTime</a></td>
    </tr>
    <tr>
        <td><a href="../observable/observable_methods/generatewithabsolutetime.html">Observable.generateWithAbsoluteTime</a></td>
    </tr>
    <tr>
        <td rowspan="2">that returns a value</td>
        <td colspan="2"></td>
        <td>
            <a href="../observable/observable_methods/return.html">Observable.return/just</a>
        </td>
    </tr>
    <tr>
        <td colspan="2">multiple times</td>
        <td><a href="../observable/observable_methods/repeat.html">Observable.repeat</a></td>
    </tr>
    <tr>
        <td colspan="3">that throws an error</td>
        <td><a href="../observable/observable_methods/throw.html">Observable.throw</a></td>
    </tr>
    <tr>
        <td colspan="3">that completes</td>
        <td><a href="../observable/observable_methods/empty.html">Observable.empty</a></td>
    </tr>
    <tr>
        <td colspan="3">that never does anything</td>
        <td><a href="../observable/observable_methods/never.html">Observable.never</a></td>
    </tr>
    <tr>
        <td rowspan="2">from an event</td>
        <td colspan="2"></td>
        <td><a href="../observable/observable_methods/fromevent.html">Observable.fromEvent</a></td>
    </tr>
    <tr>
        <td colspan="2">that uses custom functions to add and remove event handlers</td>
        <td><a href="../observable/observable_methods/fromeventpattern.html">Observable.fromEventPattern</a></td>
    </tr>
    <tr>
        <td colspan="3">from an <a title="ES6 Promise" href="https://www.promisejs.org">ES6 Promise</a></td>
        <td><a href="../observable/observable_methods/frompromise.html">Observable.fromPromise</a></td>
    </tr>
    <tr>
        <td rowspan="6">that iterates</td>
        <td rowspan="2">over the values in an array</td>
        <td></td>
        <td>
            <a href="../observable/observable_methods/fromarray.html">Observable.fromArray</a><br>
        </td>
    </tr>
    <tr>
      <td>of object key/values</td>
      <td><a href="../observable/observable_methods/pairs.html">Observable.pairs</a></td>
    </tr>
    <tr>
        <td colspan="2">of asynchronous elements</td>
        <td><a href="../observable/observable_methods/for.html">Observable.for</a></td>
    </tr>
    <tr>
        <td colspan="2">over values in a numeric range</td>
        <td><a href="../observable/observable_methods/range.html">Observable.range</a></td>
    </tr>
    <tr>
        <td colspan="2">over the values in an iterable, array or array-like object</a></td>
        <td><a href="../observable/observable_methods/from.html">Observable.from</a></td>
    </tr>
    <tr>
        <td colspan="2">over arguments</a></td>
        <td><a href="../observable/observable_methods/of.html">Observable.of</a></td>
    </tr>
    <tr>
        <td rowspan="2">that emits values on a timer</td>
        <td colspan="2"></td>
        <td><a href="../observable/observable_methods/interval.html">Observable.interval</a></td>
    </tr>
    <tr>
        <td colspan="2">with an optional initial delay</td>
        <td><a href="../observable/observable_methods/timer.html">Observable.timer</a></td>
    </tr>
    <tr>
        <td rowspan="2" colspan="2">that calls a function with no arguments</td>
        <td>on a specific scheduler</td>
        <td>
            <a href="../observable/observable_methods/start.html">Observable.start</a>
        </td>
    </tr>
    <tr>
        <td>asynchronously</td>
        <td>
            <a href="../observable/observable_methods/startasync.html">Observable.startAsync</a>
        </td>
    </tr>
    <tr>
        <td rowspan="4">decided at subscribe-time</td>
        <td colspan="2">based on a boolean condition</td>
        <td><a href="../observable/observable_methods/if.html">Observable.if</a></td>
    </tr>
    <tr>
        <td colspan="2">from a pre-set set of sequences</td>
        <td><a href="../observable/observable_methods/case.html">Observable.case</a></td>
    </tr>
    <tr>
        <td colspan="1" rowspan="2">using custom logic</td>
        <td></td>
        <td><a href="../observable/observable_methods/defer.html">Observable.defer</a></td>
    </tr>
    <tr>
        <td>that depends on a resource</td>
        <td><a href="../observable/observable_methods/using.html">Observable.using</a></td>
    </tr>
    <!-- Function factories -->
    <tr>
        <td rowspan="3">I want to wrap a function</td>
        <td colspan="2"></td>
        <td rowspan="3">and yield the result in a sequence</td>
        <td><a href="../observable/observable_methods/toasync.html">Observable.toAsync</a></td>
    </tr>
        <td colspan="2">which accepts a callback</td>
        <td><a href="../observable/observable_methods/fromcallback.html">Observable.fromCallback</a></td>
    </tr>
    <tr>
        <td colspan="2">which accepts a Node.js callback</td>
        <td><a href="../observable/observable_methods/fromnodecallback.html">Observable.fromNodeCallback</a></td>
    </tr>
    <!-- Flatteners -->
    <tr>
        <td rowspan="30">I want to combine multiple sequences</td>
        <td colspan="3">and only receive values from the sequence that yields a value first</td>
        <td><a href="../observable/observable_methods/amb.html">Observable.amb</a></td>
    </tr>
    <tr>
        <td colspan="3">and be notified when all of them have finished</td>
        <td><a href="../observable/observable_methods/forkjoin.html">Observable.forkJoin</a></td>
    </tr>
    <tr>
        <td colspan="3">and output the values from all of them</td>
        <td><a href="../observable/observable_methods/merge.html">Observable.merge</a></td>
    </tr>
    <tr>
        <td rowspan="2">in order</td>
        <td colspan="2">reusing the latest value when unchanged</td>
        <td><a href="../observable/observable_methods/combinelatest.html">Observable.combineLatest</a></td>
    </tr>
    <tr>
        <td colspan="2">using each value only once</td>
        <td><a href="../observable/observable_methods/zip.html">Observable.zip</a></td>
    </tr>
    <tr>
        <td rowspan="3">by subscribing to each in order</td>
        <td colspan="2">when the previous sequence completes</td>
        <td><a href="../observable/observable_methods/concat.html">Observable.concat</a></td>
    </tr>
    <tr>
        <td colspan="2">when the previous sequence errors</td>
        <td><a href="../observable/observable_methods/catch.html">Observable.catch</a></td>
    </tr>
    <tr>
        <td colspan="2">regardless of whether the previous sequence completes or errors</td>
        <td><a href="../observable/observable_methods/onerrorresumenext.html">Observable.onErrorResumeNext</a></td>
    </tr>
    <tr>
        <td colspan="3">by responding to different combinations of values <a href="http://en.wikipedia.org/wiki/Join-calculus">(join calculus)</a></td>
        <td><a href="../observable/observable_methods/when.html">Observable.when</a></td>
    </tr>
</tbody></table>

## See Also ##

*Reference*
 - [`Observable`](../observable/observable_methods/index.html)

*Concepts*
- [Querying Observable Sequences](../getting_started_with_rxjs/creating_and_querying_observable_sequences/querying_observable_sequences.html)
- [Operators By Category](../getting_started_with_rxjs/creating_and_querying_observable_sequences/operators_by_category.html)
