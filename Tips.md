# Tips

## Parameters

Where there is need of context for an expected parameter, name it the expected data type. [Needs Citation]

#### Abbreviations

The standards for data type naming is agreed that either a full type, partial type, or single character abbreviation (not applicable to all types), are acceptable. [Needs Citation]

> **string** as **str** or **s**

> **integer** as **int** or **i**

> **boolean** as **bool**

> **array** as **arr**

> **object** as **obj** or **args**

### Use 'this' in prototypes

When prototyping a method, if you want to use the 'this' keyword you must invoke a function with `function(){}` and not the arrow syntax `() => {}`. The arrow syntax will not transfer 'this' into the function.

[MDN: Function Context - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#Function_context)

## Object Constructors now Classes

JavaScript is an OOP Lanuage. Evident in the DOM, all things are stored as objects inheriting/prototyping deeper and deeper objects. Some objects behave as interfaces, others classes, others abstractions, etc.

Beginner tutorials often teach of two ways to build regular objects, using a constructor which uses a function call to assign properties to an identifier.
```js
function Cat( name, age ){
  this.name = name;
  this.age = age;
}
const JilliansCat = new Cat( "Misses FooBar", 0.5 );
```

This works because a [\__proto__]function inherits (prototypes) the `Object` prototype.

Now JavaScript allows the `class` keyword to perform essentially the same thing (MDN calling it [syntactical surgar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)). In a class, declaring a `constructor()` method, this will be called when the class/object is instantiated.

### Examples
Below are syntax examples of all ways to define an object/class in JavaScript.

```js
let JilliansCat = {
    name: "Misses FooBar",
    age: 0.5
}

function Cat( name, age ){
    this.name = name;
    this.age = age;
}

let JilliansCat = new Cat("Misses FooBar", 0.5);

class Cat {
    constructor( name, age ){
        this.name = name;
        this.age = age;
    }
}
```

### MySQL Result Object: While vs Foreach

When querying results in a page header to be displayed, you can choose to fetch the results all at once and use a foreach loop through the array of rows or fetch each row at a time with a while loop having the mysqli move the pointer forward after each loop.

It is only necessary to refrain from fetching results all at once in the page header when you need the result field information as you can while loop through requested fields with a while loop as well as the rows.

You could instead fetch the field info in the page header - stored separately - and then fetch the rows as normal and use foreach for both.
