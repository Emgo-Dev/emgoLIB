# String

A string is a scalar value as well as a data type in nearly all programming languages denoted by the quotation marks encapsulating a collection of characters. Simply put a string is words which you would like to treat as data.

In the following example, the sentence is treated as data and a string data type in JavaScript
```js
"Hello World!";
```

If we do not surround our characters in quotation marks, the words are treated as identifiers, throwing syntax errors for the two words as unexpected identifiers, and an unexpected token error for the exclamation mark.
```js
Hello World!;
```

## Strings in JavaScript

A string in JavaScript is an object with properties and methods. While we can write strings as above, we can also create them using the constructor of `String`.

Here are a few examples of methods available with the `String` object.
```js
let s = new String("hello world!");
s.toUpperCase() // "Hello World!"
s.slice(0, 1) // "h"
s.slice(1) // "ello world!"
s.concat(s) // "hello world!hello world!"
s.search("hello"); // 0
s.search("world"); // 6
s.match(/(\w+)/g); // [ 'hello', 'world' ]
```

## String Literals

A string literal is the denotation used to signify a string with quotation marks. There are several kinds of string literals.

Single | Double | Back Tick
-------|--------|-----------
''     | ""     | ``

Back Ticks released in ECMAScript 2015

**Back Tick Literals**

```js
`hello world`
`hello!
 world!`
`hello ${who}`
```
