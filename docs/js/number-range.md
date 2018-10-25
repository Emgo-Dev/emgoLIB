# Numbers Through

Uses a `for()` loop to gather numbers within the range of `min` to `max` (or `max` to `min`) returning an array of all numbers. Allows user to provide a callback to filter numbers that are returned.

```js
function numbersThrough( min, max, callback ){
	for(
		let mm = max < min ? [max, min] : [min, max], num = mm[0], index = 0, col = [];
		num <= mm[1];
		num++, index++
	){
		if( callback ){
			callback(num) === true ? col[index] = num : index--;
		}else{
			col[index] = num;
		};

		if( num === mm[1] ) return col;
	};
};
```

[Jasmine](../../testing/NumberRange.html)

# Numbers Between

Uses a `for()` loop to gather numbers between the range of `min` to `max` (or `max` to `min`) returning an array of all numbers. Allows user to provide a callback to filter numbers that are returned.

```js
function numbersBetween( min, max, callback ){
	for(
		let mm = max < min ? [max + 1, min - 1] : [min + 1, max - 1], num = mm[0], index = 0, col = [];
		num <= mm[1];
		num++, index++
	){
		if( callback ){
			callback(num) === true ? col[index] = num : index--;
		}else{
			col[index] = num;
		};

		if( num === mm[1] ) return col;
	};
};
```

[Jasmine](../../testing/NumberRange.html)

## Numbers Between (prototype)

Uses `Array.from()` to return an array the length of `len` of random numbers between the range of `min` to `max` (or `max` to `min`).

```js
// https://github.com/Chalarangelo/30-seconds-of-code/pull/543/commits/3c69263268f988937ea7041b5441d29f373416fd
function randomBetweenProto( min, max, len ){
	let mm = max < min ? [max, min] : [min, max];
	if( len === undefined || min === undefined || max === undefined ){ return null; };
	return Array.from({ length: len }, () =>
		Math.floor( Math.random() * (mm[1] - mm[0]) + mm[0] )
	);
};

```

[Jasmine](../../testing/NumberRange.html)

# Random Between

Uses a `for()` loop to return an array the length of `len` of random numbers between the range of `min` to `max` (or `max` to `min`). Allows user to determine if floats are rounded or not with `float` set to 1. Allows user to provide callback to filter numbers.

```js
function randomBetween( min, max, len, float = 0, callback ){
	let mm = max < min ? [max, min] : [min, max];
	if( len === undefined || min === undefined || max === undefined ){ return null; };
	function findRandom(){
		let number =  Math.random() * (mm[1] - mm[0]) + mm[0];
		if( float ) number = Math.floor( number );
		return number;
	};

	for( col = [], index = 0; index < len; index++ ){
		if( callback ){
			let num = findRandom();
			callback(num) === true ? col[index] = num : index--;
		}else{
			col[index] = findRandom();
		};

		if( index === (len - 1) ) return col;
	};
};

```

[Jasmine](../../testing/NumberRange.html)
