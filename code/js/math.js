/*
  add() -> undefined
	add(5, 5) -> 10
	add(1, 1, 1, 1, 1, 1, 1, 1, 1, 1) -> 10
	add(-1, -1, -1, -1, -1, 1, 1, 1, 1, 1) -> 0
*/
function add(){
	let n = arguments[0];
	for( let arg in arguments ) if( arg > 0 ) n += arguments[arg];
	return n;
}

/*
  subtract() -> undefined
	subtract(1, 1) -> 0
	subtract(1, -1) -> 2
	subtract(1, 1, 1, 1, 1, 1, 1, 1, 1, 1) -> -8
	subtract(-1, -1, -1, -1, -1, 1, 1, 1, 1, 1) -> -2
	subtract(1, 1, 1, 1, 1, -1, -1, -1, -1, -1) -> 2
*/
function subtract(){
	let n = arguments[0];
	for( let arg in arguments ) if( arg > 0 ) n -= arguments[arg];
	return n;
}

/*
	subtractF() -> undefined
	subtractF(1, 1) -> 0
	subtractF(1, -1) -> 0
	subtract(-1, -1, -1, -1, -1, 1, 1, 1, 1, 1) -> -10
	subtract(1, 1, 1, 1, 1, -1, -1, -1, -1, -1) -> -8
*/
function subtractF(){
	let n = arguments[0];
	for( let arg in arguments ) if( arg > 0 ) arguments[arg] < 0 ? n += arguments[arg] : n -= arguments[arg];
	return n;
}

/*
	product() -> undefined
	product(2, 2) -> 4
	product(2, -2) -> -4
*/
function product(){
	let n = arguments[0];
	for( let arg in arguments ) if( arg > 0 ) n *= arguments[arg];
	return n;
}

function divide(){
	let n = arguments[0];
	for( let arg in arguments ) if( arg > 0 ) n /= arguments[arg];
	return n;
}

function countBetween( a, b ){
	for( let i = a, j = 0, c = []; i <= b; i++, j++ ) c[j] = i;

	return c;
}

// https://github.com/Chalarangelo/30-seconds-of-code/pull/543/commits/3c69263268f988937ea7041b5441d29f373416fd
const randomBetween = ( len, min, max ) => {
	Array.from({ length: len }, () =>
		Math.floor(Math.random() * (max - min) + min)
	);
}

function findPI( iter = 10 ){
	let pi = 0, s = 3, o = 4, und = [2, 3, 4];
	const oneUp = () => und = und.map( u => u + 2 );

	pi += s + o / (und[0] * und[1] * und[2]);
	oneUp();

	for( let i = 0; i < iter; i++ ){
	  let piifier = o / (und[0] * und[1] * und[2]);
	  console.log(`${i}/${iter}`, und, pi, piifier);
	  i % 2 === 0 ? pi -= piifier : pi += piifier;
	  oneUp();
	}

	return pi;
}

////
////////        Area Formulai
////////////////////////////////////////////////
//// http://www.mathsisfun.com/area.html
//// https://www.skillsyouneed.com/num/area.html

function area( type = "", dimensions ){
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
		triangle( w, h ){ return w * h / 2; }
		sector( r, a ){ return r * r * a / 2; }
	}

	return areas[type.toLowerCase()]( w, h, w2 );
}

function circumference( n ){
	return Math.PI * n * 2;
}

function perimeter(){
	let n = arguments[0];
	for( let arg in arguments ) if( arg > 0 ) n += arguments[arg];
	return n;
}
