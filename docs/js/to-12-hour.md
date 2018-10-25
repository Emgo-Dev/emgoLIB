# To 12 Hour

```js
function to12Hour( int ){
  // ONLY HANDLES CONVERTING PATTERNS OF INTEGERS BETWEEN PERIODS OF 12 DOWN TO 12 HOUR TIME FORMATS
  // DOESN'T RETURN DATA OF ORIGINAL GIVEN INTEGER WHICH CAN BE USED TO DETERMINE THE 12 HOUR TIME AFTER SO MANY DAYS
  // ie: 72 HOURS IS MIDNIGHT ON THE THIRD DAY BUT FUNCTION WOULD ONLY RETURN 12 DUE TO 12 AM
  // if( !["string", number"].includes(typeof int) ){ throw TypeError(`to12Hour() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); }
  if( isNaN( parseInt(int) ) ){ throw TypeError(`to12Hour() requires first parameter to contain a usable number. The data of given value was ${int} and is Not-A-Number (NAN)}`); };
  let num = parseInt(int);

  return [0, 12, 24].includes(num) ? 12 : num % 12;
};
```
