# Get Decimals

```js
function getDecimals( str = "" ){
  if( !["string", "number"].includes(typeof str) ){ throw TypeError(`toWrittenNumb() requires first parameter to be a string or number. The data type of given value was ${typeof str}.`); };

  let decimal = "";
  let foundDecimal = false;
  for( let i = 0; i < str.length; i++ ){
    if( foundDecimal )
    decimal = decimal + str[i];
    if( str[i] === "." )
    if( foundDecimal )
    decimal = "";
    foundDecimal = true;
  };

  return decimal;
};
```
