# For Loop

For loops re-executes a statement as long as the condition check passes as true. There are three kinds of for-loops, for, for-of, and for-in.

The syntax of each for loop is slightly different.

## for(..)

A for loop iterates over a statement while the conditions match.

```js
for( let b = 0; b < 3; b++ ){
    console.log(b);
}
// 0
// 1
// 2
```

## for(..of..)

A for-of-loop iterates over an iterable object like `Array` or `String`.

>A regular object is not iterable.

```js

let array = [1, "Hello", true];

for( let value of array ){
    console.log(value);
}

// 1
// "Hello"
// true
```

## for(..in..)

A for-in-loop iterates over the properties of an object.

```js
let a = {
  0: "a_1",
  1: "a_2",
  2: "a_3"
}

for( let b in a ){
    console.log(b);
}

// "a_1"
// "a_2"
// "a_3"
```