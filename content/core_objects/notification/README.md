# Notification object #

Represents a notification to an observer.

## `Notification Methods`
- [`createOnCompleted`](#rxnotificationcreateoncompleted)
- [`createOnError`](#rxnotificationcreateonerrorexception)
- [`createOnNext`](#rxnotificationcreateonnextvalue)

## `Notification Instance Methods`
- [`accept`](#rxnotificationprototypeacceptobserver--onnext-onerror-oncompleted)
- [`toObservable`](#rxnotificationprototypetoobservablescheduler)

## `Notification Properties`
- [`exception`](#exception)
- [`hasValue`](#hasvalue)
- [`kind`](#kind)
- [`value`](#value)