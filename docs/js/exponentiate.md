# Exponentiate

Recursively multiplies `num` by itself until `power` is decremented to less than 2.

```js
function exponentiate( num = null, power = 0 ){
	return power < 2 ? num : exponentiate( num < 0 ? (-1 * num) * num : num * num, power - 1 );
};
```

[Jasmine](../../testing/MathOperation.html)
