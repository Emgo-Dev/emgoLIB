# Date

Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.

```js
new Date();
new Date(timestamp);
new Date(dateString);
new Date(year, month, day, hour, minutes, seconds, milliseconds);
```

**timestamp**: Integer value representing the number of milliseconds since 1 January 1970 00:00:00 UTC (Unix Epoch; but consider that most Unix time stamp functions count in seconds).

**dateString**: String value representing a date. The string should be in a format recognized by the Date.parse() method (IETF-compliant RFC 2822 timestamps and also a version of ISO8601). 

```js
let date = new Date("2018-01-05 07:25:00 Z");
```

## Description

Calling `Date` as `Date()` without `new` will return a string. Using `new Date()` will return a date instance. If instantiating `Date` with no arguments/parameters, `Date` will use the current system timestamp for the instance.

A day holds 86,400,000 milliseconds. The JavaScript Date object range is -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC.

The JavaScript Date object provides uniform behavior across platforms. The time value can be passed between systems to represent the same moment in time and if used to create a local date object, will reflect the local equivalent of the time.

The JavaScript Date object supports a number of UTC (universal) methods, as well as local time methods. UTC, also known as Greenwich Mean Time (GMT), refers to the time as set by the World Time Standard. The local time is the time known to the computer where JavaScript is executed.

## Examples

```js
new Date();
new Date('December 17, 1995 03:24:00');
new Date('1995-12-17T03:24:00');
new Date(1995, 11, 17);
new Date(1995, 11, 17, 3, 24, 0);
```

Returns the day of the week (0-6) for the specified date according to local time

### Getters

```js
Date.prototype.getDate();
```

Returns the numeric value of the specified date as the number of milliseconds since January 1 1970 00:00:00 UTC (negative for prior times)

```js
Date.prototype.getTime();
```

Returns the milliseconds (0-999) in the specified date according to local time

```js
Date.prototype.getMilliseconds();
```

Returns the seconds (0-59) in the specified date according to local time

```js
Date.prototype.getSeconds();
```

Returns the minutes (0-59) in the specified date according to local time

```js
Date.prototype.getMinutes();
```

Returns the hour (0-23) in the specified date according to local time

```js
Date.prototype.getHours();
```

Returns the day of the week (0-6) for the specified date according to local time

```js
Date.prototype.getDay();
```

Returns the month (0-11) in the specified date according to local time.

```js
Date.prototype.getMonth();
```

Returns the minutes (0-59) in the specified date according to local time.

```js
Date.prototype.getMinutes();
```

Returns the year (4 digits for 4-digit years) of the specified date according to local time

```js
Date.prototype.getFullYear();
```


### Setters

Sets the day of the month for a specified date according to local time.

```js
Date.prototype.setDate()
```

Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

```js
Date.prototype.setFullYear()
```

Sets the hours for a specified date according to local time.

```js
Date.prototype.setHours()
```

Sets the milliseconds for a specified date according to local time.

```js
Date.prototype.setMilliseconds()
```

Sets the minutes for a specified date according to local time.

```js
Date.prototype.setMinutes()
```

Sets the month for a specified date according to local time.

```js
Date.prototype.setMonth()
```

Sets the seconds for a specified date according to local time.

```js
Date.prototype.setSeconds()
```

Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC, allowing for negative numbers for times prior.

```js
Date.prototype.setTime()
```

Sets the day of the month for a specified date according to universal time.

```js
Date.prototype.setUTCDate()
```

Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

```js
Date.prototype.setUTCFullYear()
```

Sets the hour for a specified date according to universal time.

```js
Date.prototype.setUTCHours()
```

Sets the milliseconds for a specified date according to universal time.

```js
Date.prototype.setUTCMilliseconds()
```

Sets the minutes for a specified date according to universal time.

```js
Date.prototype.setUTCMinutes()
```

Sets the month for a specified date according to universal time.

```js
Date.prototype.setUTCMonth()
```

Sets the seconds for a specified date according to universal time.

```js
Date.prototype.setUTCSeconds()
```

Sets the year (usually 2-3 digits) for a specified date according to local time. Use setFullYear() instead. 

```js
Date.prototype.setYear()
```

### Transforming Getter


Returns the "date" portion of the Date as a human-readable string.

```js
Date.prototype.toDateString()
```

Converts a date to a string following the ISO 8601 Extended Format.

```js
Date.prototype.toISOString()
```

Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().

```js
Date.prototype.toJSON()
```

Returns a string representing the Date based on the GMT (UT) time zone. Use toUTCString() instead.

```js
Date.prototype.toGMTString()
```

Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

```js
Date.prototype.toLocaleDateString()
```

Converts a date to a string, using a format string.

```js
Date.prototype.toLocaleFormat()
```

Returns a string with a locality sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.

```js
Date.prototype.toLocaleString()
```

Returns a string with a locality sensitive representation of the time portion of this date based on system settings.

```js
Date.prototype.toLocaleTimeString()
```

Returns a string representing the source for an equivalent Date object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method.

```js
Date.prototype.toSource()
```

Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.

```js
Date.prototype.toString()
```

Returns the "time" portion of the Date as a human-readable string.

```js
Date.prototype.toTimeString()
```

Converts a date to a string using the UTC timezone.

```js
Date.prototype.toUTCString()
```

Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method.

```js
Date.prototype.valueOf()
```