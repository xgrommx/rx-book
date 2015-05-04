# Operator implementations

### Implement new operators by composing existing operators ###

Many operations can be composed from existing operators. This will lead to smaller, easier to maintain code. The Rx team has put a lot of effort in dealing with all corner cases in the base operators. By reusing these operators you’ll get all that work for free in your operator.

#### Sample ####

```js
Rx.Observable.prototype.flatMap = function (selector) {
  return this.map(selector).mergeAll();
};
```

In this sample, the `flatMap` operator uses two existing operators: [`map`](../../core_objects/observable/observable_instance_methods/map.md) and [`mergeAll`](../../core_objects/observable/observable_instance_methods/mergeall.md). The [`map`](../../core_objects/observable/observable_instance_methods/map.md) operator already deals with any issues around the selector function throwing an exception. The [`mergeAll`](../../core_objects/observable/observable_instance_methods/mergeall.md) operator already deals with concurrency issues of multiple observable sequences firing at the same time.

#### When to ignore this guideline ####

- No appropriate set of base operators is available to implement this operator.
- Performance analysis proves that the implementation using existing operators has performance issues.  Such can be caused by [`materialize`](../../core_objects/observable/observable_instance_methods/materialize.md).

### Implement custom operators using [`Observable.create`](../../core_objects/observable/observable_methods/create.md) ###

When it is not possible to follow guideline 5.1, use the Observable.Create(WithDisposable) method to create an observable sequence as it provides several protections make the observable sequence follow the RxJS contract.

- When the observable sequence has finished (either by firing [`onError`](../../core_objects/observer/observer_instance_methods/onerror.md) or [`onCompleted`](../../core_objects/observer/observer_instance_methods/oncompleted.md)), any subscription will automatically be unsubscribed.
- Any subscribed observer instance will only see a single OnError or OnCompleted message. No more messages are sent through. This ensures the Rx grammar of onNext* (onError|onCompleted)?

#### Sample ####

```js
Rx.Observable.prototype.map = function (selector, thisArg) {
  var source = this;
  return Rx.Observable.create(function (observer) {
    var idx = 0;
    return source.subscribe(
      function (x) {
        var result;
        try {
          result = selector.call(thisArg, x, idx++, source);
        } catch (e) {
          observer.onError(e);
          return;
        }

        observer.onNext(result);
      },
      observer.onError.bind(observer),
      observer.onCompleted.bind(observer)
    );
  })
};
```

In this sample, `map` uses the `Observable.create` operator to return a new instance of the Observable class. This ensures that no matter the implementation of the source observable sequence, the output observable sequence follows the Rx contract . It also ensures that the lifetime of subscriptions is a short as possible.

#### When to ignore this guideline ####

- The operator needs to return an observable sequence that doesn’t follow the Rx contract. This should usually be avoided (except when writing tests to see how code behaves when the contract is broken)
- The object returned needs to implement more than the Observable class (e.g. Subject, or a custom class).

### Protect calls to user code from within an operator ###

When user code is called from within an operator, this is potentially happening outside of the execution context of the call to the operator (asynchronously). Any exception that happens here will cause the program to terminate unexpectedly. Instead it should be fed through to the subscribed observer instance so that the exception can be dealt with by the subscribers.

Common kinds of user code that should be protected:
- Selector functions passed in to the operator.
- Comparer functions passed into the operator.

**Note:** calls to `Scheduler` implementations are not considered for this guideline. The reason for this is that only a small set of issues would be caught as most schedulers deal with asynchronous calls. Instead, protect the arguments passed to schedulers inside each scheduler implementation.

#### Sample ####

```js
Rx.Observable.prototype.map = function (selector, thisArg) {
  var source = this;
  return Rx.Observable.create(function (observer) {
    var idx = 0;
    return source.subscribe(
      function (x) {
        var result;
        try {
          result = selector.call(thisArg, x, idx++, source);
        } catch (e) {
          observer.onError(e);
          return;
        }

        observer.onNext(result);
      },
      observer.onError.bind(observer),
      observer.onCompleted.bind(observer)
    );
  })
};
```

This sample invokes a selector function which is user code. It catches any exception resulting from this call and transfers the exception to the subscribed observer instance through the `onError` call.

#### When to ignore this guideline ####

Ignore this guideline for calls to user code that are made before creating the observable sequence (outside of the `Observable.create` call). These calls are on the current execution context and are allowed to follow normal control flow.

**Note:** do not protect calls to `subscribe`, `dispose`, `onNext`, `onError` and `onCompleted` methods. These calls are on the edge of the monad. Calling the `onError` method from these places will lead to unexpected behavior.

### `subscribe` implementations should not throw ###

As multiple observable sequences are composed, subscribe to a specific observable sequence might not happen at the time the user calls `subscribe` (e.g. Within the `concat` operator, the second observable sequence argument to `concat` will only be subscribed to once the first observable sequence has completed). Throwing an exception would bring down the program. Instead exceptions in subscribe should be tunneled to the `onError` method.

#### Sample ####

```js
var CLOSED = 3;

function readWebSocket(socket) {
  return Rx.Observable.create(function (observer) {
    if (socket.readyState === CLOSED) {
      observer.onError(new Error('The websocket is no longer open.'));
      return;
    }
    // Rest of the implementation goes here
  });
}
```

In this sample, an error condition is detected in the subscribe method implementation. An error is raised by calling the `onError` method instead of throwing the exception. This allows for proper handling of the exception if `subscribe` is called outside of the execution context of the original call to Subscribe by the user.

#### When to ignore this guideline ####

When a catastrophic error occurs that should bring down the whole program anyway.

### `onError` messages should have abort semantics

As normal control flow in JavaScript uses abort semantics for exceptions (the stack is unwound, current code path is interrupted), RxJS mimics this behavior. To ensure this behavior, no messages should be sent out by an operator once one of it sources has an error message or an exception is thrown within the operator.

#### Sample ####

```js
Rx.Observable.prototype.minimumBuffer = function (bufferSize) {
  var source = this;
  return Rx.Observable.create(function (observer) {
    var data = [];

    return source.subscribe(
      function (value) {
        data = data.concat(value);
        if (data.length > bufferSize) {
          observer.onNext(data.slice(0));
          data = [];
        }
      },
      observer.onError.bind(observer),
      function () {
        if (data.length > 0) {
          observer.onNext(data.slice(0));
        }
        observer.onCompleted();
      }
    );
  });
};
```

In this sample, a buffering operator will abandon the observable sequence as soon as the subscription to source encounters an error. The current buffer is not sent to any subscribers, maintain abort semantics.

#### When to ignore this guideline ####

There are currently no known cases where to ignore this guideline.

### Parameterize concurrency by providing a scheduler argument ###

As there are many different notions of concurrency, and no scenario fits all, it is best to parameterize the concurrency an operator introduces. The notion of parameterizing concurrency in RxJS is abstracted through the `Scheduler` class.

#### Sample ####

```js
Rx.Observable.just = function (value, scheduler) {
  return Rx.Observable.create(function (observer) {
    return scheduler.schedule(function () {
      observer.onNext(value);
      observer.onCompleted();
    });
  });
};
```

In this sample, the `just` operator parameterizes the level of concurrency the operator has by providing a scheduler argument. It then uses this scheduler to schedule the firing of the `onNext` and `onCompleted` messages.

#### When to ignore this guideline ####

- The operator is not in control of creating the concurrency (e.g. in an operator that converts an event into an observable sequence, the source event is in control of firing the messages, not the operator).
- The operator is in control, but needs to use a specific scheduler for introducing concurrency.

### Provide a default scheduler ###

In most cases there is a good default that can be chosen for an operator that has parameterized concurrency through guideline 5.6. This will make the code that uses this operator more succinct.

**Note:** Follow guideline 5.9 when choosing the default scheduler, using the immediate scheduler where possible, only choosing a scheduler with more concurrency when needed.

#### Sample ####

```js
Rx.Observable.just = function (value, scheduler) {
  // Pick a default scheduler, in this case, immediately
  Rx.helpers.isScheduler(scheduler) || (scheduler = Rx.Scheduler.immediate);

  return Rx.Observable.create(function (observer) {
    return scheduler.schedule(function () {
      observer.onNext(value);
      observer.onCompleted();
    });
  });
};
```

In this sample, we provided a default scheduler if not provided by the caller.

#### When to ignore this guideline ####

Ignore this guideline when no good default can be chosen.

### The scheduler should be the last argument to the operator ###

Adding the scheduler as the last argument is a must for all operators introducing concurrency.  This is to ensure that the schedulers are optional, and a default one can be chosen.  This also makes the programming experience much more predictable.

#### Sample ####

```js
Rx.Observable.just = function (value, scheduler) {
  // Pick a default scheduler, in this case, immediately
  Rx.helpers.isScheduler(scheduler) || (scheduler = Rx.Scheduler.immediate);

  return Rx.Observable.create(function (observer) {
    return scheduler.schedule(function () {
      observer.onNext(value);
      observer.onCompleted();
    });
  });
};
```

In this sample the `return` operator has two parameters, and the scheduler parameter defaults to the immediate scheduler if not provided. As the scheduler argument is the last argument, adding or omitting the argument is clearly visible.

#### When to ignore this guideline ####

JavaScript supports rest arguments syntax. With this syntax, the rest arguments has to be the last argument. Make the scheduler the final to last argument in this case.

### Avoid introducing concurrency ###

By adding concurrency, we change the timeliness of an observable sequence. Messages will be scheduled to arrive later. The time it takes to deliver a message is data itself, by adding concurrency we skew that data.  This includes not using such mechanisms as `setTimeout`, `setImmediate`, `requestAnimationFrame`, `process.nextTick`, etc which should be avoided directly in your code, and instead be wrapped by a `Scheduler` class.

#### Sample 1 ####

```js
Rx.Observable.prototype.map = function (selector, thisArg) {
  var source = this;
  return Rx.Observable.create(function (observer) {
    var idx = 0;
    return source.subscribe(
      function (x) {
        var result;
        try {
          result = selector.call(thisArg, x, idx++, source);
        } catch (e) {
          observer.onError(e);
          return;
        }

        observer.onNext(result);
      },
      observer.onError.bind(observer),
      observer.onCompleted.bind(observer)
    );
  })
};
```

In this sample, the select operator does not use a scheduler to send out the `onNext` message. Instead it uses the source observable sequence call to `onNext` to process the message, hence staying in the same time-window.

#### Sample 2 ####

```js
Rx.Observable.just = function (value, scheduler) {
  // Pick a default scheduler, in this case, immediately
  Rx.helpers.isScheduler(scheduler) || (scheduler = Rx.Scheduler.immediate);

  return Rx.Observable.create(function (observer) {
    return scheduler.schedule(function () {
      observer.onNext(value);
      observer.onCompleted();
    });
  });
};
```

In this case, the default scheduler for the `just` operator is the immediate scheduler. This scheduler does not introduce concurrency.

#### When to ignore this guideline ####

Ignore this guideline in situations where introduction of concurrency is an essential part of what the operator does.

**NOTE:** When we use the Immediate scheduler or call the observer directly from within the call to `subscribe`, we make the `subscribe` call blocking. Any expensive computation in this situation would indicate a candidate for introducing concurrency.

### Hand out all disposables instances created inside the operator to consumers ###

`Disposable` instances control lifetime of subscriptions as well as cancelation of scheduled actions. RxJS gives users an opportunity to unsubscribe from a subscription to the observable sequence using disposable instances.

After a subscription has ended, no more messages are allowed through. At this point, leaving any state alive inside the observable sequence is inefficient and can lead to unexpected semantics.

To aid composition of multiple disposable instances, RxJS provides a set of classes implementing `Disposable` such as:

Name                       | Description
-------------------------- | ---------------------------------------------------------------
CompositeDisposable        | Composes and disposes a group of disposable instances together.
SerialDisposable           | A place holder for changing instances of disposable instances. Once new disposable instance is placed, the old disposable instance is disposed.
SingleAssignmentDisposable | A place holder for a single instance of a disposable.
ScheduledDisposable        | Uses a scheduler to dispose an underlying disposable instance.

#### Sample ####

```js
Observable.prototype.zip = function () {
  var parent = this,
      sources = slice.call(arguments),
      resultSelector = sources.pop();

  sources.unshift(parent);
  return new AnonymousObservable(function (observer) {
    var n = sources.length,
      queues = arrayInitialize(n, function () { return []; }),
      isDone = arrayInitialize(n, function () { return false; });

    function next(i) {
      var res, queuedValues;
      if (queues.every(function (x) { return x.length > 0; })) {
        try {
          queuedValues = queues.map(function (x) { return x.shift(); });
          res = resultSelector.apply(parent, queuedValues);
        } catch (ex) {
          observer.onError(ex);
          return;
        }
        observer.onNext(res);
      } else if (isDone.filter(function (x, j) { return j !== i; }).every(identity)) {
        observer.onCompleted();
      }
    };

    function done(i) {
      isDone[i] = true;
      if (isDone.every(function (x) { return x; })) {
        observer.onCompleted();
      }
    }

    var subscriptions = new Array(n);
    for (var idx = 0; idx < n; idx++) {
      (function (i) {
        var source = sources[i], sad = new SingleAssignmentDisposable();
        Rx.helpers.isPromise(source) && (source = Rx.Observable.fromPromise(source));
        sad.setDisposable(source.subscribe(function (x) {
          queues[i].push(x);
          next(i);
        }, observer.onError.bind(observer), function () {
          done(i);
        }));
        subscriptions[i] = sad;
      })(idx);
    }

    return new CompositeDisposable(subscriptions);
  });
};
```

In this sample, the operator groups all disposable instances controlling the various subscriptions together and returns the group as the result of subscribing to the outer observable sequence. When a user of this operator subscribes to the resulting observable sequence, he/she will get back a disposable instance that controls subscription to all underlying observable sequences.

#### When to ignore this guideline ####

There are currently no known instances where this guideline should be ignored.

### Operators should not block ###

RxJS is a library for composing asynchronous and event-based programs using observable collections.

By making an operator blocking we lose these asynchronous characteristics. We also potentially lose composability (e.g. by returning a value typed as `T` instead of `Observable<T>`).  This is in contrast to the Array#extras such as `sum`, `reduce`, `some` and `every` which return a single value.

#### Sample ####

```js
Rx.Observable.prototype.sum = function () {
  return this.reduce(function (acc, x) { return acc + x; }, 0);
};
```

In this sample, the `sum` operator has a return type of `Observable<Number>` instead of `Number`. By doing this, the operator does not block. It also allows the result value to be used in further composition.

#### When to ignore this guideline ####

There are currently no known instances where this guideline should be ignored.

### Avoid deep stacks caused by recursion in operators ###

As code inside Rx operators can be called from different execution context in many different scenarios, it is nearly impossible to establish how deep the stack is before the code is called. If the operator itself has a deep stack (e.g. because of recursion), the operator could trigger a stack overflow quicker than one might expect.

There are two recommended ways to avoid this issue:

- Use the recursive `scheduleRecursive` methods on the `Scheduler`
- Implement an infinite looping generator using the yield iterator pattern, convert it to an observable sequence using the `from` operator.

#### Sample 1 ####

```js
Rx.Observable.repeat = function (value, scheduler) {
  return Rx.Observable.create(function (observer) {
    return scheduler.scheduleRecursive(function (self) {
      observer.onNext(value);
      self();
    });
  });
};
```

In this sample, the recursive `scheduleRecursive` method is used to allow the scheduler to schedule the next iteration of the recursive function. Schedulers such as the current thread scheduler do not rely on stack semantics. Using such a scheduler with this pattern will avoid stack overflow issues.

#### Sample 2 ####

```js
Rx.Observable.repeat = function (value) {
  return Rx.Observable.from(
    function* () {
      while(true) { yield value; }
    }());
};
```

The yield iterator pattern ensures that the stack depth does not increase drastically. By returning an infinite generator with the `from` operator can build an infinite observable sequence.

#### When to ignore this guideline ####

There are currently no known instances where this guideline should be ignored.

### Argument validation should occur outside `Observable.create`

As guideline 5.3 specifies that the `Observable.create` operator should not throw, any argument validation that potentially throws exceptions should be done outside the `Observable.create` operator.

#### Sample ####

```js
Rx.Observable.prototype.map = function (selector, thisArg) {
  if (this == null) {
    throw new TypeError('Must be an instance of an Observable');
  }
  if (selector == null) {
    throw new TypeError('selector cannot be null/undefined');
  }
  var selectorFn = typeof selector !== 'function' ?
    function () { return selector; } :
    selector;
  var source = this;
  return Rx.Observable.create(function (observer) {
    var idx = 0;
    return source.subscribe(
      function (x) {
        var result;
        try {
          result = selectorFn.call(thisArg, x, idx++, source);
        } catch (e) {
          observer.onError(e);
          return;
        }

        observer.onNext(result);
      },
      observer.onError.bind(observer),
      observer.onCompleted.bind(observer)
    );
  };
};
```

In this sample, the arguments are checked for null values before the `Observable.create` operator is called.

#### When to ignore this guideline ####

Ignore this guideline if some aspect of the argument cannot be checked until the subscription is active.

### Unsubscription should be idempotent ###

The observable `subscribe` method returns a `Disposable` instance that can be used to clean up the subscription. The `Disposable` instance doesn’t give any information about what the state of the subscription is. As consumers do not know the state of the subscription, calling the `dispose` method multiple times should be allowed. Only the first call the side-effect of cleaning up the subscription should occur.

#### Sample ####

```js
var subscription = xs.subscribe(function (x) { console.log(x); });
subscription.dispose();
subscription.dispose();
```

In this sample, the subscription is disposed twice, the first time the subscription will be cleaned up and the second call will be a no-op.

### Unsubscription should not throw ###

As the RxJS’s composition makes that subscriptions are chained, so are unsubscriptions. Because of this, any operator can call an unsubscription at any time. Because of this, just throwing an exception will lead to the application crashing unexpectedly. As the observer instance is already unsubscribed, it cannot be used for receiving the exception either. Because of this, exceptions in unsubscriptions should be avoided.

#### When to ignore this guideline ####

There are currently no known cases where to ignore this guideline.

### Custom `Observable` implementations should follow the RxJS contract ###

When it is not possible to follow guideline 5.1, the custom implementation of the `Observable` class should still follow the RxJS contract in order to get the right behavior from the RxJS operators.

#### When to ignore this guideline ####

Only ignore this guideline when writing observable sequences that need to break the contract on purpose (e.g. for testing).

### Operator implementations should follow guidelines for RxJS usage ###

As Rx is a composable API, operator implementations often use other operators for their implementation (see paragraph 5.1). RxJS usage guidelines should be strongly considered when implementing these operators.

#### When to ignore this guideline ####

As described in the introduction, only follow a guideline if it makes sense in that specific situation.