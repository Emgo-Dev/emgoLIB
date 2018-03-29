# Tips

## Modus instead of Methodology

Methodology is often used to describe a concept whereby you do something according to it's principles. BEM is a CSS class naming methodology that has principles for maintaining a system of class names with infrastructure that can be maintained and understood over time at varying degree of project scope.

I find the term frustrating to say and annunciate, especially its' plural (methodologies). Its' synonyms are paradigm, mode, and modus operandi. I am making the decision now to replace it in my vocabulary with modus, a shorthand modus operandi. This reduces methodology, a 5 syllable word, to modus, a 2 syllable word.

So where I use modus I am also meaning to convey a development methodology.

## Naming Things

A common recommendation is "Use meaningful identifiers." A single word may not be as meaningful, or specific, as multiple words. Consequently, some naming conventions specify rules for the treatment of "compound" identifiers containing more than one word.

As most programming languages do not allow whitespace in identifiers, a method of delimiting each word is needed (to make it easier for subsequent readers to interpret which characters belong to which word). It is possible to write names by simply concatenating words, and this is sometimes used, as in mypackage for Java package names, though legibility suffers for longer terms, so usually some form of separation is used.

### Readability

Well-chosen identifiers make it significantly easier for developers and analysts to understand what the system is doing and how to fix or extend the source code to apply for new needs.

For example, although the statement

```
a = b * c;
```

is syntactically correct, its purpose is not evident. Contrast this with:

```
weekly_pay = hours_worked * pay_rate;
```

which implies the intent and meaning of the source code, at least to those familiar with the context of the statement.

### Delimiter-Separated Words

One approach is to delimit separate words with a nonalphanumeric character. The two characters commonly used for this purpose are the hyphen ("-") and the underscore ("\_"); e.g., the two-word name "two words" would be represented as "two-words" or "two_words".

This convention has no standard name, though it may be referred to as lisp-case or COBOL-CASE (compare Pascal case), kebab-case, or other variants (snake_case). Of these, kebab-case, dating at least to 2012, has achieved some currency since.

### Letter case-separated words

Another approach is to indicate word boundaries using medial capitalization, called "CamelCase", "Pascal case", and many other names, thus rendering "two words" as either "twoWords" or "TwoWords". This convention is commonly used in Pascal, Java, C#, and Visual Basic. Treatment of acronyms in identifiers (e.g. the "XML" and "HTTP" in XMLHttpRequest) varies. Some dictate that they be lowercased (e.g. XmlHttpRequest) to ease typing and readability, whereas others leave them uppercased (e.g. XMLHTTPRequest) for accuracy.

### B.E.M. (Block_Element--Modifier)

BEM is a naming convention for CSS in order to maintain large design systems by treating HTML components as objects.

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
