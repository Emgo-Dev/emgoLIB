# To Capital

```js
function toCapital( str = "", lowAll = 0 ){
    if( typeof str !== "string" ){ throw TypeError(`toCapital() requires first parameter to be a string. The data type of given value was ${typeof str}`); };
    if( typeof lowAll !== "number" ){ throw TypeError(`toCapital() requires second parameter to be a number. Default (0) ignores case of rest of string, on (1) de-capitalizes rest of string.`); };

    return str.slice(0, 1).toUpperCase().concat( (lowAll ? str.slice(1).toLowerCase() : str.slice(1)) );
};
```
