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

### MySQL Result Object: While vs Foreach

When querying results in a page header to be displayed, you can choose to fetch the results all at once and use a foreach loop through the array of rows or fetch each row at a time with a while loop having the mysqli move the pointer forward after each loop.

It is only necessary to refrain from fetching results all at once in the page header when you need the result field information as you can while loop through requested fields with a while loop as well as the rows.

You could instead fetch the field info in the page header - stored separately - and then fetch the rows as normal and use foreach for both.