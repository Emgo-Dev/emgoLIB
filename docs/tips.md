# Tips

## Naming Things

A common recommendation is "Use meaningful identifiers." A single word may not be as meaningful, or specific, as multiple words. Consequently, some naming conventions specify rules for the treatment of "compound" identifiers containing more than one word.

As most programming languages do not allow whitespace in identifiers, a method of delimiting each word is needed (to make it easier for subsequent readers to interpret which characters belong to which word). It is possible to write names by simply concatenating words, and this is sometimes used, as in mypackage for Java package names, though legibility suffers for longer terms, so usually some form of separation is used.

### Readability

Well-chosen identifiers make it significantly easier for developers and analysts to understand what the system is doing and how to fix or extend the source code to apply for new needs.

For example, although the following statement is syntactically correct it does not convey the meaning and context.

```
a = b * c;
```

Compared with this example, where the names provide context and meaning for the operation taking place.

```
weekly_pay = hours_worked * pay_rate;
```

## Parameters

Where there is need of context for an expected parameter, name it the expected data type. [Needs Citation]

#### Abbreviations

The standards for data type naming is agreed that either a full type, partial type, or single character abbreviation (not applicable to all types), are acceptable. [Needs Citation]

> **string** as **str** or **s**

> **integer** as **int** or **i**

> **boolean** as **bool**

> **array** as **arr**

> **object** as **obj** or **args**

#### Defaults

If the need for giving a parameter (or any identifier) a name is greater than the need for brevity, you can further indicate to the expected data type by assigning the default value to an empty form of that data type.

```js
function getName( firstName = "", lastName = "", age = -1 ){ return firstname + " " + lastName; }
```

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
