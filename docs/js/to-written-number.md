# To Written Number

```js
function toWrittenNumb( int ){
    if( !["string", "number"].includes(typeof int) ){ throw TypeError(`toWrittenNumb() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); };

    // NUMBER IS FLOAT IF REMAINDER OF MODULO IS > OR <  1 OR -1 AND 0
    let num = String(
      int % 1 < 1 && int % 1 > 0 ||
      int % 1 > -1 && int % 1 < 0 ?
      parseFloat(int) : parseInt(int)
    );
    let decI = num.search("\\.");
    let isFloat = decI > -1 ? true : false;
    let isNegative = num < 0 ? true : false;
    let wNum = "";

    if( isFloat ){ wNum = wNum.concat(num.slice(decI).split("").reverse().join("")); };

    // LOOP THROUGH NUMBER FROM RIGHT TO LEFT WITH VAR a
      // BEGIN AT END OF STRING, OR JUST BEFORE DECIMAL IF NUMBER IS A FLOAT
      // END AT BEGINNING OF STRING, OR INDEX 1 IF NUMBER IS NEGATIVE BECAUSE OF '-'
    // COUNT DIGITS TO ADD ',' WITH VAR b BY USING MODULO
    for(
      let a = isFloat ? decI - 1 : num.length - 1,
      b = 0;
      isNegative ? a > 0 : a >= 0;
      a--, b++
    ){
        if( (b > 0) && ((b%3) === 0) ){ wNum = wNum.concat(","); };

        wNum = wNum.concat(num[a]);
    };

    if( isNegative ){ wNum = wNum.concat("-"); };

    return wNum.split("").reverse().join("");
};
```
