### <a id="observeonscopescope-watchexpression-objectequality"></a>`observeOnScope(scope, watchExpression, [objectEquality])`
<a href="#observeonscopescope-watchexpression-objectequality">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/rx.angular.js/blob/master/src/observeronscope.js#L1-L13 "View in source") 

Creates a factory which allows the user to observe a property on a given scope to check for old and new values.

#### Arguments
1. `scope` *(Scope)*: The scope to apply the watch function.
2. `watchExpression`: Expression that is evaluated on each `$digest` cycle. A change in the return value triggers a call to the listener.
    - `string`: Evaluated as expression
    - `function(scope)`: called with current scope as a parameter.
3. `[objectEquality]`: *(Function)*: Compare object for equality rather than for reference.

#### Returns
*(Rx)*: The root of RxJS

#### Example
```js
angular.module('observeOnScopeApp', ['rx'])
    .controller('AppCtrl', function($scope, observeOnScope) {
        
        observeOnScope($scope, 'name').subscribe(function(change) {
            $scope.observedChange = change;
            $scope.newValue = change.newValue;
            $scope.oldValue = change.oldValue;
        });
    });
```

### Location

File:
- /src/observeronscope.js

Dist:
- rx.angular.js