# Add

Loops over `arguments` with `for(..in)` using `+=` operator to add all subsequent parameter values to `arguments[0]`.

```js
function add( numbers = 0 ){
  for( let arg in arguments ) if( arg > 0 ) arguments[0] += arguments[arg];
  return n;
}
```

[Jasmine](../../testing/MathOperation.html)

# Subtract

Loops over `arguments` with `for(..of)` using `-=` operator to subtract all subsequent parameter values from `arguments[0]`.

```js
function subtract( numbers = 0 ){
  for( let arg in arguments ) if( arg > 0 ) arguments[0] -= arguments[arg];
  return arguments[0];
};
```

[Jasmine](../../testing/MathOperation.html)

## Subtract Always

Loops over `arguments` with `for(..of)` using `-=` or `+=` (if negative) operator to force subtraction of all subsequent parameter values from `arguments[0]`.


```js
function subtractAlways( numbers = 0 ){
  for( let arg in arguments ) if( arg > 0 ) arguments[arg] < 0 ? arguments[0] += arguments[arg] : arguments[0] -= arguments[arg];
  return arguments[0];
}
```

[Jasmine](../../testing/MathOperation.html)

# Product

Loops over `arguments` with `for(..of)` using `*=` operator to multiply all subsequent parameter values to `arguments[0]`.

```js
function product( numbers = 0 ){
  for( let arg in arguments ) if( arg > 0 ) arguments[0] *= arguments[arg];
  return arguments[0];
}
```

[Jasmine](../../testing/MathOperation.html)


# Divide

Loops over `arguments` with `for(..of)` using `/=` operator to divide all subsequent parameter values on `arguments[0]`.

```js
function divide( numbers = 0 ){
  for( let arg in arguments ) if( arg > 0 ) arguments[0] /= arguments[arg];
  return arguments[0];
}
```

[Jasmine](../../testing/MathOperation.html)

# Exponentiate

Recursively multiplies `num` by itself until `power` is decremented to less than 2.

```js
function exponentiate( num = 0, power = 0, exp = 1 ){
  return power < 1 ? exp : exponentiate( num, power - 1, exp * num );
}
```

[Jasmine](../../testing/MathOperation.html)
