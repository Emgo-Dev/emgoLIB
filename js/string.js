////
////////        String Functions
////////////////////////////////////////////////
////

/**
 * Capitalize first letter of string
 * Distinguished from String.toUpperCase which capitalizes all characters.
 * @param   {string}  string	String of words. First character should not be alaphanumeric.
 * @return  {string}  String with first character capitalized.
 *                    Example: "hello" -> "Hello"
 */
const toCapital = string => { return string.slice(0, 1).toUpperCase().concat(string.slice(1)); }

String.prototype.toCapital = () => {
	return string.slice(0, 1).toUpperCase() + string.slice(1);
}

/**
 * Stringify integer affixed w/ ordinal
 * @param   {integer}  int Should be a whole number.
 * @return  {string}   Stringified int with ordinal. No spaces.
 *                     Example: 1 -> "1st"
 */
const toOrdinal = int => {
	int = parseInt(int);
	var digits = [ (int % 10), (int % 100)];
	var suffix = [[1, 2, 3, 4], ["st", "nd", "rd", "th"]];

	return suffix[0].includes(digits[0]) && (digits[1] < 11 || digits[1] > 13) ? int + suffix[1][digits[0]-1] : int + suffix[1][3];
}

/**
 * Transform integer to 12 hour format
 * @param   {integer}  int  Integer to transform. Represents an hour.
 * @return  {integer}       Result of int and modulo.
 *                          Example: 13 -> 1
 */
const to12Hour = int => {
	isDataType(int, "number") ? null : logError(`to12Hour() requires ${int} data type be a number.`)

	return int === 0 || int === 12 || int === 24 ? 12 : int % 12
}

/**
 * Stringify integer affixed w/ meridiem
 * @param   {integer}  int  Hour to determine appropriate meridiem of.
 * @return  {string}        Stringified int affixed with meridiem.
 *                          Example: 7 -> "7am"
 */
const toMeridiem = int => {
	isDataType(int, "number") ? null : logError(`toMeridiem() requires ${int} data type be a number.`)
	meridiem = int > 11 ? "pm" : "am"

	return to12Hour.toString().concat(meridiem)
}

/**
 * Return meridiem
 * @param   {integer}  int	Hour to determine appropriate meridiem of.
 * @return  {string}        Stringified int affixed with meridiem
 *                          Example: 7 -> "am"
 */
const to12Hour = ( int ) => {
	int = parseInt(int);

	return int === 0 || int === 12 || int === 24 ? 12 : int % 12;
}

/**
 * Affix "0" X times to integer
 * Maintain the digit length of an integer.
 * @param   {integer}  int  The integer to remain unchanged
 * @param   {integer}  len  The digit length to maintain
 * @param   {integer}  dir  Side of integer to maintain digit length
 * @return  {string}        Example: "1" -> "01" / "10".
 */
const setDigits = ( int=0, len=1, dir=0 ) => {
	return dir > 0 ? int.toString().padStart(len, "0") : int.toString().padEnd(len, "0");
}

/**
 * Format
 * Maintains double digit format for time strings.
 * @param   {string}  time  [The time string.]
 * @return  {string}				[Formatted string (H:M:SS -> HH:MM:SS).]
 */
let getColonTime = times => {
	return times.map( t => setDigits(t, 2, 1) ).join(":");
}

/**
 * Format colon timestamp
 * @param   {Date}  date  A date object
 * @return  {string}			Formatted string from date object representing current time (HH:MM:SS).
 */
let toColonTime = ( date ) => {
	let times = [ date.getHours(), date.getMinutes(), date.getSeconds() ];
	return times.map( t => setDigits(t, 2, 1) ).join(":");
}

	return times.map( t => setDigits(t, 2, 1) ).join(":");
}

/**
 * Stringify and transform integer to written number
 * @param   {integer}  int  Plain number
 * @return  {string}        Stringified int with commas
 *                          Example: 100000 -> "100,000"
 */

	for( let a = number.length-1, b=0; a >= 0; a--, b++ ){
		// Read through number backwards (number[a--])
		// Use modulo to find every 3rd digit, excluding 0 because 0%3 === 3%3
		if( (b > 0) && ((b%3) === 0) ){ readableInt += seperator; }

		readableInt += number[a];
	}

	return readableInt.split("").reverse().join("");
}

/**
 * Real Price Format
 * @param   {integer/float}  number  [A number to conver to a real price]
 * @return  {string}                 [description]
 */
const toWrittenPrice = ( number ) => { 
	number = number.toString();
	let parts = number.search(/[.]/g) > 0 ? number.split(".") : [number, ""];

	return parts[0].concat("." + parts[1].padEnd(2, "0"));
}

/**
 * Type Into Element
 * Inserts text into an element letter by letter to imitate typing.
 * @param  {HTMLelement}  elementNode	Element to type string into
 */
String.prototype.typeInto = ( elementNode ) => {
	let typedString = [];
	let step = 1;

	let tick = setInterval(function() {
		if( step == this.length ){
			clearInterval(tick);
		}

		typedString.push( this.slice(step - 1, step) );
		step += 1;
		elementNode.innerHTML = typedString.join('');
	}, 50);
}