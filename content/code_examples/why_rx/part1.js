var $input = $('#input'),
    $results = $('#results');

/* Only get the value from each key up */
var keyups = Rx.Observable.fromEvent($input, 'keyup')
    .map(e => e.target.value)
    .filter(text => text.length > 2);

/* Now throttle/debounce the input for 500ms */
var throttled = keyups.throttle(500 /* ms */);

/* Now get only distinct values, so we eliminate the arrows and other control characters */
var distinct = throttled.distinctUntilChanged();