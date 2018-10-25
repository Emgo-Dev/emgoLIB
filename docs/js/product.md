# Product

Loops over `arguments` with `for(..of)` using `*=` operator to multiply all subsequent parameter values to `arguments[0]`.

```js
function product( numbers ){
	for( let arg in arguments ){
		if( arg > 0 ){ arguments[0] *= arguments[arg]; };
	};
	return arguments[0];
};
```

[Jasmine](../../testing/MathOperation.html)


### Mutiply

```js
let multiply = product;
```

[Jasmine](../../testing/MathOperation.html)
