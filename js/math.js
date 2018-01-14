////
////////        Mathmatical Functions
////////////////////////////////////////////////
////

function add( a, b ){
	return a + b;
}

function subtract( a, b ){
	return a - b;
}

function multiply( a, b ){
	return a * b;
}

function divide( a, b ){
	return a / b;
}

function sum( numberCollection ){
	let sumTotal = 0;

	numberCollection.forEach((x)=>{ sumTotal += x; })

	return sumTotal;
}

function sumOf( numberCollection ){
	return sum( numberCollection );
}

function product( numberCollection ){
	let productTotal = 1; // Setting to 0 would cancel out any operation using *= operator

	numberCollection.forEach((x)=>{ productTotal *= x; })

	return productTotal;
}

function productOf( numberCollection ){
	product( numberCollection );
}

function getIntBetween( a, b ){
	let c = [];
	
	while( a <= b ){
		c.push(a);
		a++;
	}
	
	return c;
}

/**
 * https://github.com/Chalarangelo/30-seconds-of-code/pull/543/commits/3c69263268f988937ea7041b5441d29f373416fd
 * @param  {integer} len Iteration count
 * @param  {integer} min Lowest possible integer
 * @param  {integer} max Highest possible integer
 * @return {array}       A collection of all generated results
 */
const randomIntWithLengthInRange = (len, min, max) =>
	Array.from({ length: len }, () =>
		Math.floor(Math.random() * (max - min) + min)
	);

////
////////        Area Formulai
////////////////////////////////////////////////
//// http://www.mathsisfun.com/area.html

function areaOfCircle( radius ){
	return Math.PI * radius * radius;
}

function areaOfEllipse( width, height ){
	return Math.PI * width * height;
}

function areaOfParallelogram( width, height ){
	return width * height;
}

function areaOfRectangle( width, height ){
	return width * height;
}

function areaOfSquare( side ){
	return side * side;
}

function areaOfTrapezoid( width1, width2, height ){
	return ((width1 + width2) * height) / 2;
}

function areaOfTriangle( width, height ){
	return width * height / 2;
}

function circumferenceOfCircle( radius ){
	return areaOfCircle( radius ) * 2;
}

function getPerimiter( measurements ){
	let perimiter = 0;

	measurements.forEach((x)=>{ perimiter += x; });
}