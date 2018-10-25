# Divide

Loops over `arguments` with `for(..of)` using `/=` operator to divide all subsequent parameter values on `arguments[0]`.

```js
function divide( numbers ){
	for( let arg in arguments ){
		if( arg > 0 ){ arguments[0] /= arguments[arg]; };
	};
	return arguments[0];
};
```

[Jasmine](../../testing/MathOperation.html)
