# Subtract

Loops over `arguments` with `for(..in)` using `-=` operator to subtract all subsequent parameter values from `arguments[0]`.

```js
function subtract( numbers = 0 ){
  for( let arg in arguments ) if( arg > 0 ) arguments[0] -= arguments[arg];
  return arguments[0];
}
```

[Jasmine](../../testing/MathOperation.html)

## Subtract Always

Loops over `arguments` with `for(..in)` using `-=` or `+=` (if negative) operator to force subtraction of all subsequent parameter values from `arguments[0]`.


```js
function subtractAlways( numbers ){
  for( let arg in arguments ) if( arg > 0 ) arguments[arg] < 0 ? arguments[0] += arguments[arg] : arguments[0] -= arguments[arg];
  return arguments[0];
};
```

[Jasmine](../../testing/MathOperation.html)
