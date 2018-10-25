# To Meridiem

```js
function toMeridiem( int ){
  // SAME PROBLEMS AS OUTLINED IN to12Hour()
  if( !["string", "number"].includes(typeof int) ){ throw TypeError(`toMeridiem() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); };
  if( isNaN(parseInt(int)) ){ throw TypeError(`toMeridiem() requires first parameter to contain a usable number. The data of given value was ${int} and is Not-A-Number (NAN)}`); };
  let med = int < 24 ? int > 11 ? "pm" : "am" : "am";
  let num = parseInt(int);

  return [0, 12, 24].includes(num) ? `12${med}` : `${num % 12}${med}`;
};
```
