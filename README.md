# Introduction

Developers, Welcome! This is my personal library of tools for development focusing on a dependency-less environment built on the original web languages. Also included are cheatsheets, documentation, and general notes useful as a reference in Markdown Files under docs/.

## Naming Things

Function names use a camelCase naming convention. Where classes or interfaces occur, The interface is PascalCase, and the filename is the interface name.

### Suffix Terminology

The following suffix patterns are used in function names to indicate the functions overall purpose.

**to...:** Transforms the subject **to** something else, but remains of the same type.

**set...:** Updates or adds information to the subject.

**get...:** Returns a new set of data from the subject.

#### Examples

```js
toOrdinal("25"); // "25th"
```

```js
getColonTime(new Date()); // 08:30:00
```

## Code

If a library doesn't solve a problem it shouldn't exist. Here are the problems and solutions my libraries solve.

- [Query Selector: Targeting Elements](#query-selector:-targeting-elements)
- [Ordinals: 1st, 2nd, 3rd...](#ordinals:-1st,-2nd,-3rd...)
- [Meridiem: Morning or Evening?](#meridiem:-morning-or-afternoon)
- [setInterval: Do this Every X](#setinterval:-do-this-every-x)
- [setTimeout: Do this After X](#settimeout:-do-this-after-x)

### area(): Find the area of ANYTHING!

Finding the area of a geometric shape requires a specific formula for some over others. This function combines the formula for the gemoetric shapes. Pass in the type of gemoetric shape you want to calculate for in the first parameter, and the dimensions to calculate following.

The first parameter is expected to be the name of the formula, while the following values will only be used up to the required dimensions for the formula. If you want to perform multiple operations, call the function independently.

```js
area("circle", 25); // 1963.4954084936207
area("square", 25); // 625
area("ellipse", 25, 35); // 2748.8935718910693
area("parallelogram", 25, 35); // 875
area("trapezoid", 25, 50, 12); // 15000
```

### Query Selector: Targeting Elements

The browser creates a node tree (DOM) when it renders a markup file (HTML). JavaScript can used rendered HTML Element Nodes after the page is loaded with `document`'s two methods `querySelector()` & `querySelectorAll()`. They can be frustrating to use in larger projects, so many have built solutions. Here is mine.

The function uses `document.querySelectorAll()` if the target element results contains more than one value in the `NodeList`. Otherwise it will use `document.querySelector()`. The returned values are from those original methods, so expect `HTMLElementPrototype` (inherited prototype of any specific HTML Element class being queried) or `NodeList` (an array-like collection of HTML element prototypes).

```js
let element = DOM.ele("cssSelector");
```

### Ordinals: 1st, 2nd, 3rd...

Hey, remember what an ordinal is? In particular, it's an ordered thing. However in language we add an ordinal suffix to a number to represent how we pronounce its word. These ordinal suffixes occur in a particular pattern in the English language. This function will take in a number and add the appropriate ordinal suffix to it.

```js
toOrdinal(25); // returns "25th"
toOrdinal("25"); // returns "25th"
```

PR accepted by [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code/pull/71/files)

### Meridiem: Morning or Afternoon?

JavaScripts Date object doesn't provide AM or PM without calling the entire date. You get can the current hour as an integer, so this function determines the meridiem from the 24 hour int returned.

```js
toMeridiem(14); // returns "2pm"
```

PR Accepted By: [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code/pull/536/files)

### setInterval: Do this every X

Having code that loops can be really great, and this API has a lot of uses, but writing it out can be frustrating. This function brings it all together and returns the ID for the loop which you can use to cancel it.

```js
let currentTime = interval( ()=>{ console.log(new Date()) }, 1);
```

### setTimeout: Do this after X

The same problems exist for the timeout method.

```js
let NewYearShout! = delay( ()=>{ console.log("Happy New Year!") }, 10);
```

### getCharFor(): Get string characters/symbols

Ever wanted to use a specific symbol or character that isn't bound to a key on your keyboard? It's tough having to remember their code or key combination, whatever way you want to invoct that character. But there are ultimately physical limits to access the vast number of symbols around the world.

You can get a character as a string from the String.fromCodePoint(), but you need to use a specific integer, and characters are not really in any order.

```js
getCharFor("heart")
// "❤"
```

### getColonTime(): Accurate Digital Clock Format

Did you know that all date & time information is kept in JavaScripts `Date`? Unfortunately there is very poor support for formatting this information as found in other languages (I love PHPs date()). With this function you can extract the full time representation as a digital clock format, maintaining the digit placeholders, from a `Date` given as a parameter.

```js
getColonTime(new Date()); // 08:30:00
```


PR accepted by [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code/pull/536/files) and discussed in [issue #538](https://github.com/Chalarangelo/30-seconds-of-code/issues/538)
