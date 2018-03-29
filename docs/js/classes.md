# Classes

Javascript classes provide an alternative syntax to the existing prototype-based inheritance of objects. Classes were introducted to ECMAScript in 2015. There are no new object-oriented inheritance model to JavaScript.

## Declaration

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

## Expression

A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance's) .name property, though)

```js
// unnamed
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

### Hoisting

Unlike function declarations, classes declarations (and expressions) are not hoisted. You first need to declare your class and then access it.


## Constructor

The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.