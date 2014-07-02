# asObserver

`Rx.Observer.prototype.asObserver()`
<a href="#rxobserverprototypeasobserver">#</a> [&#x24C8;](https://github.com/Reactive-Extensions/RxJS/blob/master/rx.js#L2862-L2872 "View in source") [&#x24C9;][1]

Hides the identity of an observer.

#### Returns
*(Observer)*: An observer that hides the identity of the specified observer.

#### Example
```js
function SampleObserver () {
    Rx.Observer.call(this);
    this.isStopped = false;
}

SampleObserver.prototype = Object.create(Rx.Observer.prototype);
SampleObserver.prototype.constructor = SampleObserver;

Object.defineProperties(SampleObserver.prototype, {
    onNext: {
        value: function (x) {
            if (!this.isStopped) {
                console.log('Next: ' + x);
            }
        }
    },
    onError: {
        value: function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                console.log('Error: ' + err);
            }
        }
    },
    onCompleted: {
        value: function () {
            if (!this.isStopped) {
                this.isStopped = true;
                console.log('Completed');
            }
        }
    } 
});

var sampleObserver = new SampleObserver();

var source = sampleObserver.asObserver();

console.log(source === sampleObserver);
// => false
```

### Location

- rx.js