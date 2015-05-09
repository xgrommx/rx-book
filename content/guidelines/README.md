## RxJS Design Guidelines

<img style="display: block; margin: 0 auto; clear: right;"
  src="https://raw.githubusercontent.com/Reactive-Extensions/RxJS/master/doc/designguidelines/images/984368.png"
  alt="RxJS Logo">

* [Introduction](introduction/index.html)
* [When to use RxJS](when/index.html)
  * [Use RxJS for orchestrating asynchronous and event-based computations](when/index.html#use-rxjs-for-orchestrating-asynchronous-and-event-based-computations)
  * [Use RxJS to deal with asynchronous sequences of data](when/index.html#use-rxjs-to-deal-with-asynchronous-sequences-of-data)
* [The RxJS contract](contract/index.html)
  * [Assume the RxJS Grammar](contract/index.html#assume-the-rxjs-grammar)
  * [Assume resources are cleaned up after an `onError` or `onCompleted` messages](contract/index.html#assume-resources-are-cleaned-up-after-an-onerror-or-oncompleted-message)
  * [Assume a best effort to stop all outstanding work on Unsubscribe](contract/index.html#assume-a-best-effort-to-stop-all-outstanding-work-on-unsubscribe)
* [Using RxJS](using/index.html)
* [Operator implementations](implementations/index.html)

<!-- 1. Introduction
2. When to use RxJS
  1. Use RxJS for orchestrating asynchronous and event-based computations
  2. Use RxJS to deal with asynchronous sequences of data
3. The RxJS contract
  1. Assume the RxJS Grammar
  2. Assume resources are cleaned up after an `onError` or `onCompleted` messages
  3. Assume a best effort to stop all outstanding work on Unsubscribe
4. Using RxJS
  1. Consider drawing a Marble-diagram
  2. Consider passing multiple arguments to `subscribe`
  3. Consider passing a specific scheduler to concurrency introducing operators
  4. Call the `observeOn` operator as late and in as few
  5. Consider limiting buffers
  6. Make side-effects explicit using the `do`/`tap` operator
  7. Assume messages can come through until unsubscribe has completed
  8. Use the Publish operator to share side-effects
5. Operator implementations
  1. Implement new operators by composing existing operators
  2. Implement custom operators using `Observable.create`
  3. Protect calls to user code from within an operator
  4. `subscribe` implementations should not throw
  5. `onError` messages should have abort semantics
  6. Parameterize concurrency by providing a scheduler argument
  7. Provide a default scheduler
  8. The scheduler should be the last argument to the operator
  9. Avoid introducing concurrency
  10. Hand out all disposables instances created inside the operator to consumers
  11. Operators should not block
  12. Avoid deep stacks caused by recursion in operators
  13. Argument validation should occur outside `Observable.create`
  14. Unsubscription should be idempotent
  15. Unsubscription should not throw
  16. Custom Observable implementations should follow the Rx contract
  17. Operator implementations should follow guidelines for Rx usage -->
