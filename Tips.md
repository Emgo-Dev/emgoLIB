# Tips

## Parameters

Where there is no context for the expected parameter, name it the expected data type, either full or of a common abbreviation.

### Use 'this' in prototypes

When prototyping a method, if you want to use the 'this' keyword you must invoke a function with `function(){}` and not the arrow syntax `() => {}`. The arrow syntax will not transfer 'this' into the function.

### Abbreviations

>string -> str, s
>integer -> int, i
>boolean -> bool
>array -> arr
>object -> obj, args

## Object Constructors now Classes

A constructor is a method which is called upon the instantiation/initialization of an object.

With JavaScript objects we could build a constructor from a function. As all things are objects in JavaScript, when creating a new instance of our constructor function inside a variable, the function would assign values to the variable turning it into an object with properties and methods.

Now we have the class keyword to create a proper class as defined in other languages. In a class, declaring a `construct()` method, this will be called when the class/object is instantiated.

```
let Person = {
    name: "Michael",
    age: 25
}

function Person( name, age ){
    this.name = name;
    this.age = age;
}

let Michael = new Person("Michael", 25);

class Person {
    constructor( name, age ){
        this.name = name;
        this.age = age;
    }
}
```
