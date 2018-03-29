# Array

## Examples

```js
let arr = ["foo", "bar"];

arr;     // ["foo", "bar"]
arr[1];  // "bar"
arr[2];  // undefined
```

```js
let arr = ["foo"];

arr.push("bar");

arr; // ["foo", "bar"]
```

```js
let arr = [];

arr[2] = "foo";

// BELOW MAY VARY DEPENDING ON CONSOLE
arr; // [<2 empty slots>, "foo"]
arr; // [undefined, undefined, "foo"]
```
