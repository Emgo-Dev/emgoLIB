# Numeralize

```js
function numeralize( number ){
  if( typeof number !== "number" ) number = String(number);
  let romanNumerals = "";
  const numerals = [
    ["I", "V"],
    ["X", "L"],
    ["C", "D"],
    ["M", "V\u0305"],
    ["X\u0305", "L\u0305"],
    ["C\u0305", "D\u0305"],
    ["M\u0305", "V\u0305"]
  ];
  const digits = [
    1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000
  ];

  function reverseString( str ){
    for( let i = 0, reversed = ""; i < str.length; i++ ){
      reversed = str[i] + reversed;

      if( i == str.length - 1 ) return reversed;
    };
  };

  function splitNumbers( str ){
    for( let i = str.length - 1, zeroes = "", numbers = []; i >= 0; i-- ){
      for( let z = 0; z < i; z++ ) zeroes += "0";

      if( str[i] > 0 ) numbers[numbers.length] = str[i] + zeroes;

      if( i === 0 ) return numbers;
    };
  };

  function getNumeral( str ){
    for( let digit = 0, numeral = ""; digit < digits.length; digit++ )
      if( digits[digit] / str > 1 ){
        let digitPair = digit - 1;

        for( let l = 0; l < Math.floor( (str / digits[digitPair]) % 5 ); l++ )
          if( l < 3 ) numeral += numerals[digitPair][0];

        if( str > (digits[digitPair] * 3) ){
          if( str > (digits[digitPair] * 5) ) numeral = numerals[digitPair][1] + numeral;
          if( str > (digits[digitPair] * 8) ) numeral = numerals[digitPair][0] + numerals[digitPair + 1][0];
          if( str < (digits[digitPair] * 6) ) numeral = numerals[digitPair][1];
          if( str < (digits[digitPair] * 5) ) numeral = numerals[digitPair][0] + numeral;
        };

        return numeral;
      };
  };

  for( let numberPair of splitNumbers(reverseString(number)) )
    romanNumerals += getNumeral(numberPair);

  return romanNumerals;
};
```
