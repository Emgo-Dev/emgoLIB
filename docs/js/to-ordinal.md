# To Ordinal

```js
function toOrdinal( int ){
    // ONLY CHECK DATA TYPE OF GIVEN PARAMETER
    // DOESN'T CHECK WHETHER THE GIVEN PARAMETER IS A REAL INTEGER NUMBER, WHETHER PARSED OR NOT
    // FAIL CASE PARAMETER VALUES: "first", 1.5, "1.5"
    if( !["string", "number"].includes(typeof int) ){ throw TypeError(`toOrdinal() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); };
    let digits = [ (parseInt(int) % 10), (parseInt(int) % 100) ];
    let pattern = [ [1, 2, 3, 4], ["st", "nd", "rd", "th"] ];

    return pattern[0].includes( digits[0] ) && ( digits[1] < 11 || digits[1] > 13 ) ? int + pattern[1][digits[0]-1] : int + pattern[1][3];
};
```
