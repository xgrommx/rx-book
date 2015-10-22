### <a id="rx"></a>`rx`
<a href="#rx">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/rx.angular.js/blob/master/src/factory.js#L1-L6 "View in source") 

Creates a factory for using RxJS.

#### Returns
*(Rx)*: The root of RxJS

#### Example
```js
angular.module('example', ['rx'])
    .controller('AppCtrl', function($scope, rx) {

        $scope.counter = 0;

        rx.Observable.interval(1000)
            .safeApply(
                $scope, 
                function (x) {
                    $scope.counter = x;
                })
            .subscribe();

    });
```

{% if book.isPdf %}



{% else %}

### Location

File:
- /src/factory.js

Dist:
- rx.angular.js

{% endif %}
