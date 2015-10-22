## [`Rx.Observer.prototype.asObserver()`](https://github.com/Reactive-Extensions/RxJS/blob/master/src/core/observer.js#L19)

Hides the identity of an observer.

#### Returns
*(Observer)*: An observer that hides the identity of the specified observer.

{% if book.isPdf %}

#### [Example](http://jsbin.com/zivar/2/edit?js,console)

```js
function SampleObserver () {
    Rx.Observer.call(this);
    this.isStopped = false;
}

SampleObserver.prototype = Object.create(Rx.Observer.prototype);
SampleObserver.prototype.constructor = SampleObserver;

Object.defineProperties(SampleObserver.prototype, {
    onNext: {
        value: x => {
            if (!this.isStopped) {
                console.log(`Next: ${x}`);
            }
        }
    },
    onError: {
        value: err => {
            if (!this.isStopped) {
                this.isStopped = true;
                console.log(`Error: ${err}`);
            }
        }
    },
    onCompleted: {
        value: () => {
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

{% else %}

#### Example
[](http://jsbin.com/zivar/2/embed?js,console)

{% endif %}

{% if book.isPdf %}



{% else %}

### Location

- rx.js

{% endif %}