# Add

Loops over `arguments` with `for(..in)` using `+=` operator to add all subsequent parameter values to `arguments[0]`.

```js
function add( numbers = 0 ){
  for( let arg in arguments ) if( arg > 0 ) arguments[0] += arguments[arg];
  return n;
}
```

[Jasmine](../../testing/MathOperation.html)
