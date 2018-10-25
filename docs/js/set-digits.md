# Set Digits

```js
function setDigits( str = 0, len = 1, x = 0 ){
  if( !["string"].includes(typeof str) ){ throw TypeError(`toDigits() requires first parameter to be a string. The data type of given value was ${typeof str}.`); };

  [str.padStart(str.length + len, "0"), str.padEnd(str.length + len, "0")][x > 0 ? 1 : 0];
};
```
