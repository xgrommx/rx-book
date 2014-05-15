# RxJS

Reactive Extensions (Rx) is a library for composing asynchronous and event-based programs using observable sequences and LINQ-style query operators.

Data sequences can take many forms, such as a stream of data from a file or web service, web services requests, system notifications, or a series of events such as user input.

Reactive Extensions represents all these data sequences as observable sequences. An application can subscribe to these observable sequences to receive asynchronous notifications as new data arrive.

RxJS has no dependencies which complements and interoperates smoothly with both synchronous data streams such as iterable objects in JavaScript and single-value asynchronous computations such as Promises as the following diagram shows:

<center>
<table>
   <th></th><th>Single return value</th><th>Mutiple return values</th>
   <tr>
      <td>Pull/Synchronous/Interactive</td>
      <td>Object</td>
      <td>Iterables (Array | Set | Map | Object)</td>
   </tr>
   <tr>
      <td>Push/Asynchronous/Reactive</td>
      <td>Promise</td>
      <td>Observable</td>
   </tr>
</table>
</center>

To put it more concretely, if you know how to program against Arrays using the Array#extras, then you already know how to use RxJS!

<center><table>
 <thead>
  <tr><th colspan="2">Example code showing how similar high-order functions can be applied to an Array and an Observable</th></tr>
  <tr><th>Iterable</th><th>Observable</th></tr>
 </thead>
 <tbody>
  <tr><td><pre><code>getDataFromLocalMemory()
  .filter (function (s) { return s != null; })
  .map( function (s) { return s + 'transformed'; })
  .forEach(function (s) { console.log('next => '' + it); })</code></pre></td>
  <td><pre><code>getDataFromNetwork()
  .filter (function (s) { return s != null; })
  .map( function (s) { return s + 'transformed'; })
  .subscribe(function (s) { console.log('next => '' + it); })</code></pre></td></tr>
 </tbody>
</table></center>

