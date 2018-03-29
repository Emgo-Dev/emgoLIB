# Arguments Object

The arguments object is an object created by functions to store parameters passed to the function. It inherits some, but not all of the methods from `Array` prototype.

```js
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
```


## Description

The arguments object is a local variable available within all (non-arrow) functions. You can refer to a function's arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry's index starting at 0. For example, if a function is passed three arguments, you can refer to them as follows:

```js
arguments[0]
arguments[1]
arguments[2]
```

The arguments can also be set:

```js
arguments[1] = 'new value';
```

The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length. For example, it does not have the pop method. However it can be converted to a real Array:

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
```

You can use the arguments object if you call a function with more arguments than it is formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments. Use arguments.length to determine the number of arguments passed to the function, and then process each argument by using the arguments object. To determine the number of parameters in the function signature, use the Function.length property.

### Using typeof with Arguments

The typeof arguments returns 'object'. 

```js
console.log(typeof arguments); // 'object'
```

The typeof individual arguments can be determined with the use of indexing.

```js
console.log(typeof arguments[0]); //this will return the typeof individual arguments.
```

### Using the Spread Syntax with Arguments

As you could do with any Array-like object, you can also use the Array.from() method or the spread operator to convert arguments to a real Array:

```js
var args = Array.from(arguments);
var args = [...arguments];
```

## Properties

**`arguments.callee`**
Reference to the currently executing function.

**`arguments.caller`**
Reference to the function that invoked the currently executing function.

**`arguments.length`**
Reference to the number of arguments passed to the function.

**`arguments[@@iterator]`**
Returns a new Array Iterator object that contains the values for each index in 
the arguments.