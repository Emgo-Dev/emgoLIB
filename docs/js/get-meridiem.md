# Get Meridiem

```js
function getMeridiem( str = "" ){
  if( !["string"].includes(typeof str) ){ throw TypeError(`getMeridiem() requires first parameter to be a string. The data type of given value was ${typeof str}.`); };

  return str.slice( str.search( ["am","pm"].filter( r => str.includes(r) )[0] ) );
};
```
