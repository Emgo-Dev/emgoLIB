/*
  add() -> undefined
	add(5, 5) -> 10
	add(1, 1, 1, 1, 1, 1, 1, 1, 1, 1) -> 10
	add(-1, -1, -1, -1, -1, 1, 1, 1, 1, 1) -> 0
*/
function add( numbers = 0 ){
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
function subtract( numbers = 0 ){
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
function subtractAlways( numbers = 0 ){
	let n = arguments[0];
	for( let arg in arguments ) if( arg > 0 ) arguments[arg] < 0 ? n += arguments[arg] : n -= arguments[arg];
	return n;
}

/*
	product() -> undefined
	product(2, 2) -> 4
	product(2, -2) -> -4
*/
function product( numbers = 0 ){
	let n = arguments[0];
	for( let arg in arguments ) if( arg > 0 ) n *= arguments[arg];
	return n;
}

function divide( numbers = 0 ){
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

// Nilakantha series
// https://www.mathsisfun.com/numbers/pi.html
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
//// https://www.varsitytutors.com/hotmath/hotmath_help/topics/perimeter-area-volume

function area( type = "", dimensions ){
	const w = arguments[1];
	const h = arguments[2];
	const w2 = arguments[3];
	const areas = {
		circle( r ){ return Math.PI * r * r; },
		ellipse( w, h ){ return Math.PI * w * h; },
		parallelogram( w, h ){ return w * h; },
		rectangle( w, h ){ return w * h; },
		sector( r, a ){ return r * r * a / 2; }
		square( i ){ return i * i; },
		trapezoid( w1, h, w2, ){ return w1 * w2 * h; },
		triangle( w, h ){ return w * h / 2; },
	}

	return areas[type.toLowerCase()]( w, h, w2 );
}

/*
	volume("cube", 2) -> 8
	volume("pyramid", 2, 8, 4) -> 21.33...
	volume("pyramid", (2 * 4), 8) -> 21.33...
*/
function volume( type = "", dimensions ){
  const w = arguments[1];
  const h = arguments[2];
	const l = arguments[3];
  const volumes = {
		// SOME FORMULAE USE 'base' OR 'b' AS A PRE-CALCULATED AREA OF w AND l
		// FOR THOSE THAT DO, IF l IS UNSET, DETERMINE THAT BASE WAS CALCULATED FOR BY USER AS w
		// THIS RENDERS THE NEED FOR A SEPARATE 'rectangular prism' FROM prism() UNNECESSARY
		cone( r, h ){ return ( Math.PI * (r * r) * h ) / 3; },
		cube( i ){ return i * i * i; },
		cylinder( r, h ){ return ( Math.PI * (r * r) ) * h; },
		hemisphere( r ){ return ( 2 * Math.PI * (r * r * r) ) / 3; },
		prism( w, h, l ){ return l !== undefined ? (w * l) * h : w * h; },
		/* rectanglePrism( w, h, l ){ return w * h * l; }, */
		pyramid( w, h, l ){ return l !== undefined ? ( (w * l) * h ) / 3 : (w * h) / 3; },
		radius( w, h ){ return Math.sqrt( w / (Math.PI * h) ); },
		rectangle( w, h, l ){ return w * h * l; },
		sphere( r ){ return ( 4 * Math.PI * (r * r * r) ) / 3; }
  }

  return volumes[type.toLowerCase()]( w, h, l );
}

function circumference( n ){
	return Math.PI * n * 2;
}

function perimeter( measurements ){
	let n = arguments[0];

	for( let arg in arguments ) if( arg > 0 ) n += arguments[arg];

	return n;
}
