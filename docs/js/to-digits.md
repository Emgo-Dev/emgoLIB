# To Digits

```js
function toDigits( str = 0, len = 1, x = 0 ){
  if( !["string"].includes(typeof str) ){ throw TypeError(`toDigits() requires first parameter to be a string. The data type of given value was ${typeof str}.`); };
  if( typeof str === "string" ) return str.slice(0, len);

  return [str.padStart(len, "0"), str.padEnd(len, "0")][x > 0 ? 1 : 0];
};
```
