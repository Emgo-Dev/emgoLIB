# Extend

```js
function extend( str = "", len = 0, fill = "", dir = 1 ){
  if( !["string"].includes(typeof str) ){ throw TypeError(`toDigits() requires first parameter to be a string. The data type of given value was ${typeof str}.`); };

  for( let i = len; i > 0; i-- ){
    str = dir < 0 ? fill + str : str + fill ;
  };

  return str;
};
```
