////
////////        Mathmatical Functions
////////////////////////////////////////////////
////

function add(){
	let s = 0;
	for( let n in arguments ){ s += arguments[n]; }
	return s;
}

function subtract(){
	let s = arguments[0];
	for( let n in arguments ) if( n > 0 ) arguments[n] < 0 ? s += arguments[n] : s-= arguments[n];
	return s;
}

function product(){
	let p = 1;
	for( let n in arguments ) p *= arguments[n];
}

function divide(){
	let d = 1;
	for( let n in arguments ) d /= arguments[n];
}

function countBetween( a, b ){
	let c = [];

	while( a <= b ){
		c.push(a);
		a++;
	}

	return c;
}

// https://github.com/Chalarangelo/30-seconds-of-code/pull/543/commits/3c69263268f988937ea7041b5441d29f373416fd
const randomBetween = (len, min, max) =>
	Array.from({ length: len }, () =>
		Math.floor(Math.random() * (max - min) + min)
	);

////
////////        Area Formulai
////////////////////////////////////////////////
//// http://www.mathsisfun.com/area.html

function area( type, dimensions ){
	const w = arguments[1];
	const h = arguments[2];
	const w2 = arguments[3];
	const areas = {
		circle( r ){ return Math.PI * r * r; },
		ellipse( w, h ){ return Math.PI * w * h; },
		parallelogram( w, h ){ return w * h; },
		rectangle( w, h ){ return w * h; },
		square( i ){ return i * i; },
		trapezoid( w1, h, w2, ){ return w1 * w2 * h; },
		triangle( w, h ){ return w * h; }
	}

	return areas[type](w, h, w2);
}

function circumference( r ){
	return Math.PI * r * r * 2;
}

function perimeter(){
	let p = 0;
	for( m in arguments ){ p += arguments[m];	}
	return p;
}
