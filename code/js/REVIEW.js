let toCapitalNative = ( str, lowerRest = 0 ) => {
    if( typeof str !== "string" ){ throw TypeError(`toCapital() requires first parameter to be a string. The data type of given value was ${typeof str}`); }
    if( typeof lowAll !== "number" ){ throw TypeError(`toCapital() requires second parameter to be a number. Default (0) ignores case of rest of string, on (1) de-capitalizes rest of string.`); }

    return toUpperCaseNative(string.slice(0, 1)).concat((lowerRest === 1 ? string.slice(1).toLowerCase() : string.slice(1)))
}

let toUpperCaseNative = ( string ) => {
    let newString = "";
    let l = 0;
    for( let letter of string ){
        if( letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122 ){
            newString = newString.concat(String.fromCodePoint(letter.charCodeAt() - 32))
        }else{
            newString = newString.concat(letter);
        }
        l++;
    }

    return newString;
}

let toLowerCaseNative = ( string ) => {
    let newString = "";
    let l = 0;
    for( let letter of string ){
        if( letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90 ){
            newString = newString.concat(String.fromCodePoint(letter.charCodeAt() - 32))
        }else{
            newString = newString.concat(letter);
        }
        l++;
    }

    return newString;
}

/**
 * Return character of key/pair w/ String.fromCodePoint()
 * Kind of like finding a needle in a needle-stack, as long as you know the needle you want and where it is.
 * @param   {string}  charKey  Key name for character code.
 * @return  {string}           If charKey is exact match with key in charCodeKeys, returns a single character, otherwise uses Array.filter() & Array.includes() to find similar keys returning array of characters
 *//
const getCharFor = ( charKey="" ) => {
    const charKeyHasDash = charKey.search("-") > -1 ? true : false
    const charKeyWords = charKey.split("-")
    const charKeyWordCount = charKey.split("-").length
    let resultFromPoint = []
    let filterIterationCount = 0
    let filterExactKeyIndex = null
    let charKeyRequest = getCharFor.charCodeKeys.filter( key => charKeyWordCount > 1 ? key[0].includes(charKey) && key[0] === charKey : key[0] === charKey ? true : false )

    charKeyRequest.length === 1 ? resultFromPoint = String.fromCodePoint(charKeyRequest[0][1]) : null

    if( charKeyRequest < 1 ){
        for( let a = 0; a < 1000000; a++ ){ // Get arbitrary # of results from Sring.fromCodePoint, I don't know how many results there are, and overdrafting will return an error, so you can't find out just by looping until no more results.
            resultFromPoint.push(String.fromCodePoint(a));
        }
    }

    return charKeyRequest.length > 1 ? charKeyRequest : resultFromPoint
}

getCharFor.charCodeKeys = [
    ["cent", 162],
    ["copyright", 169],
    ["one-quarter", 188],
    ["one-fourth", 188],
    ["one-half", 189],
    ["three-quarters", 190],
    ["three-fourths", 190],
    ["heart", 10084],
    ["heart-horizontal", 10085],
    ["single-curly-quote-left", 10075],
    ["single-curly-quote-right", 10076],
    ["double-curly-quote-left", 10077],
    ["double-curly-quote-right", 10078],
    ["large-single-curly-quote", 10079],
    ["large-double-curly-quote", 10080],
    ["x", 10060],
    ["large-x", 10006],
    ["slanted-x", 10007],
    ["large-slanted-x", 10008],
    ["cross-solid", 10013],
    ["cross-outline", 10014],
    ["check-mark", 10003],
    ["large-check-mark", 10004],
    ["bubble-number-1", 10102],
    ["bubble-number-2", 10103],
    ["bubble-number-3", 10104],
    ["bubble-number-4", 10105],
    ["bubble-number-5", 10106],
    ["bubble-number-6", 10107],
    ["bubble-number-7", 10108],
    ["bubble-number-8", 10109],
    ["bubble-number-9", 10110],
    ["bubble-number-10", 10111],
    ["circle-number-1", 10102],
    ["circle-number-2", 10103],
    ["circle-number-3", 10104],
    ["circle-number-4", 10105],
    ["circle-number-5", 10106],
    ["circle-number-6", 10107],
    ["circle-number-7", 10108],
    ["circle-number-8", 10109],
    ["circle-number-9", 10110],
    ["circle-number-10", 10111],
    ["outline-circle-number-1", 10112],
    ["outline-circle-number-2", 10113],
    ["outline-circle-number-3", 10114],
    ["outline-circle-number-4", 10115],
    ["outline-circle-number-5", 10116],
    ["outline-circle-number-6", 10117],
    ["outline-circle-number-7", 10118],
    ["outline-circle-number-8", 10119],
    ["outline-circle-number-9", 10110],
    ["outline-circle-number-10", 10122]
]

/**
 * Format
 * Maintains double digit format for time strings.
 * @param   {string}  time  [The time string.]
 * @return  {string}                [Formatted string (H:M:SS -> HH:MM:SS).]
 */
let getColonTime = times => {
    return times.map( t => setDigits(t, 2, 1) ).join(":");
}

/**
 * Format colon timestamp
 * @param   {Date}  date  A date object
 * @return  {string}  Formatted string from date object representing current time (HH:MM:SS).
 */
let toColonTime = ( date, hour12=0 ) => {
    let times = [ (hour12 ? date.getHours() : to12Hour(date.getHours())), date.getMinutes(), date.getSeconds() ];

    return times.map( t => setDigits(t, 2, 1) ).join(":");
}

/**
 * Type Into Element
 * Inserts text into an element letter by letter to imitate typing.
 * @param  {HTMLelement}  elementNode   Element to type string into
 */
String.prototype.typeInto = ( elementNode ) => {
    let typedString = [];
    let step = 1;

    let tick = window.setInterval(function() {
        if( step == this.length ){
            clearInterval(tick);
        }

        typedString.push( this.slice(step - 1, step) );
        step += 1;
        elementNode.innerHTML = typedString.join('');
    }, 50);
}


// The object check's if the number passed is a prime number by dividing up to the 500th increment
// The reason for dividing up to the 500th increment is to ensure that the number is prime
var Prime = {
	getLast: [],
	check: function(number) {
		// last avlue of getLast array property
		var getLastL = this.getLast[this.getLast.length-1];
		// incrementing value for loop divide
		var pComp = 1;
		// while the last array is not equal to 0, keep dividing, if loop fails too many times, quit
		var checkTry = 0;
		while(this.getLastL !== 0) {
			checkTry++;
			if (checktry <= 500) {
				this.getLastL;
				getLastLength++;
				console.log(getLastL);
			} else {
				console.log('Failed to divide user number evenly. User number is not a prime number.');
				return getLastL;
			}
		}
	}
}

// Static function
function check(number) {
   var store;
   for(i=2; i<250; i++) {
     store = number/i;
     console.log(store);
   }
}


/*
* Exponent
* The product of a number multiplied by itself so many times, represented by it's power.
* The base - b - raised to the power - p - is equal to the multiplication of b, p times.
*
* @Formula: b to the power of p=bxbxbx...xb
* @Example_1: 3 to the power of 2=3x3=9
* @Example_2: 5 to the power of 3=5x5x5=125
*/
function findExponentOf(base, power) {
    var exponent = base;               // Start exponent to base value
    if (!power) {
        return exponent;               // Exponent if power = 0 is base
    }
    Array(power).fill(base).forEach( (x, y, z) =>{ exponent*=x; });
    for (l=0; l<power-1; l++) {        // Exponent is equal to base * power
        exponent = exponent * base;
    }
    return exponent;
}

/*
* Factorial (n!)
* The factorial of n is denoted by n! and calculated by the product of
* integer numbers from 1 - n.
*
* @Example_1 if n > 0: n!=1x2x3x4x...xn
* @Example_2 if n = 5: n!=1x2x3x4x5
*/

function findFactorialOf(n) {
    if (!n) {                 // If n given is 0 return at least 1
        console.log("Factorial given was 0, can't multiply by 0 so returning 1.")
        return 1;
    }

    var fMedian = 1;             // The multiple to increase factorial by
    for (m=1; m<=n; m++) {       // Multiply loop int by & up to given factorial
        console.log("Multiplying "+m+" of "+n+".");
        fMedian = fMedian * m;
    }
    return fMedian;              // Return figured factorial
}

/*
* Fuel Economy per Mile
* Find the fuel economy in price per mile for price per gallon
*
* @param array [mpg, ppg, distance]
*
* @param mpg: Miles per Gallon
* @param ppg: Price per Gallon
* @param dis: Find cost of fuel for distance as miles
*
* @output [ppm, ]
*
* @param ppm: Price per Mile
*/

var array = [40, 2.69, 10];
function findEconomyOf(a) {
    ppmTrue = a[1] / a[0];                    // ppg divided by mpg
    ppm = Math.round(ppmTrue * 100) / 100;    // Rounds ppm to the nearest cent
    ppdTrue = ppm * a[2];                     // ppm multiplied by dist
    ppd = Math.round(ppdTrue * 100) / 100;    // Rounds ppd to the nearest cent

    return [ppm, ppd];
}
findEconomyOf(array);


function rIndex(item) {
    var item = this;
    var listCount = item.parentElement.children.length;
    var indexCounter = 0;
    while (item != null) {
        item = item.previousElementSibling;
        indexCounter += 1;
    }
    return indexCounter - 1
    // I am subtracting one because we are counting index values not quantative values - where though indexCounter is meant to represent the number of iterations through the elements, beginning at 0 is dishonest because we cannot target an element with a quantative value of 0 (it wouldn't exist)

    array = [1,2,3,4];
    index = [0,1,2,3];
    target = index[2];
    count = this.parentElement.children.length;
    step = 0;

    while (target != null) {
      target = target.previousElementSibling;
      step+=1;
    }

    would return
    step = 1
    step = 2
    step = 3


    function indexOf(element) {
        item = this;
        pool = this.parentElement.children.length;
        step = pool > 0 ? 1 : 0;

        while (item != null) {
            item = item.previousElementSibling;
            step+=1;
            console.log(step);
        }
    }


function indexOf(element) {
    item = element;
    pool = element.parentElement.children.length;
    step = -1;
    while (item != null) {
        item = item.previousElementSibling;
        step+=1;
        console.log(step);
    }
    return step;
};

    var array = docEle('.slider__radio')[0].children;
    indexOf(array[3]);
}

function stringSearch(string, regex) {
  if (string.search(regex) != -1) {
    return "Found Result";
  } else {
    return "No Result";
  }
}

function stringFind(string, regex) {
  return string.match(regex);
}

// @function          removeClass()
//
// @description       removes a single class from an html
//                    elements class attribute while maintaining
//                    other assigned classes
//
// @source [string]   An html classes as a string.
//                    To get HTML element class string
//                    from DOM do element.className
//
// $measure [string]  A regular expression to match for

function removeClass(source, measure) {
  // Split source string into array
  var array = stringSplit(source, " ");
  // Declare result array
  var result = [];

  // Loop through source array
  for (s=0; s<=array.length; s++) {
    // Match to measure
    if (array[s] === measure) {
      // Do nothing if match found
      // return array.splice(s, 1);
    } else {
      // Push unmatched to new array
      result.push(array[s]);
    }
  }

  // Return new array without matches
  return result.join(" ");
}

function update( value, arg ){ //  BELONGS UNDER object.js
  let temp = value;
  const commands = {
    $set( oldV, newV ){ oldV = newV; }
  }

  for( let prop in arg ){
    if( ![undefined].includes(commands[prop]) ){
      return commands[prop](temp, arg[prop]);
    }
  }
}
