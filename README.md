# emgoLIB: Currated Library Collection

This is my collection of currated an developed libraries. They're broken up among language and function.

I'm building this collection with native JavaScript to provide utility for the right circumstance. Libraries are broken down by language and function to minimize depdendency and bandwidth if only some functions are needed.

## Problems

If a library doesn't solve a problem it shouldn't exist. Here are the problems and solutions my libraries solve.

- [Query Selector: Targeting Elements](#query-selector:-targeting-elements)
- [Ordinals: 1st, 2nd, 3rd...](#ordinals:-1st,-2nd,-3rd...)
- [Meridiem: Morning or Afternoon?](#meridiem:-morning-or-afternoon)
- [setInterval: Do this Every X](#setinterval:-do-this-every-x)
- [setTimeout: Do this After X](#settimeout:-do-this-after-x)


### Query Selector: Targeting Elements

When the browser loads a webpage the HTML markup used to create a node tree known as the DOM (Document Object Model). Two APIs are provided for JS to interact with when interacting with the loaded webpage and browser: document, window. These objects allow JS to interact with the webpage in various ways using their methods.

Still targeting elements repeatedly is tiresome. The solution to this is found under js/DOM.js. The solution is a method that combines `document`'s two methods `querySelector` & `querySelectorAll` to return a single element, or if more a collection.

The returned values are from those original methods, so expect either a node or a nodeList.

```
let element = DOM.ele("cssSelector");
```

### Ordinals: 1st, 2nd, 3rd...

These ordinal suffixes occur in a particular pattern in the English language. This function will take in a number and add the approprate ordinal to it.

```
toOrdinal(25); // returns "25th"
```

[30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code/pull/71/files)

### Meridiem: Morning or Afternoon?

JavaScripts Date object doesn't provide AM or PM without calling the entire date. You get can the current hour as an integer, so this function determines the meridiem from the 24 hour int returned.

```
toMeridiem(14); // returns "2pm"
```

### setInterval: Do this every X

Having code that loops can be really great, and this API has a lot of uses, but writing it out can be frustrating. This function brings it all together and returns the ID for the loop which you can use to cancel it.

```
let currentTime = interval( ()=>{ console.log(new Date()) }, 1);
```

### setTimeout: Do this after X

The same problems exist for the timeout method.

```
let NewYearShout! = delay( ()=>{ console.log("Happy New Year!") }, 10);
```