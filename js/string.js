/**
 * Return character of key-name
 * Kind of like finding a needle in a needle-stack, as long as you know the needle you want and where it is.
 * @param  {string} characterNeedle  Key-name of character to search for.
 * @return {string}                  The character of key-name
 */
const getCharFor = charKey => {
	const charKeyHasDash = charKey.search("-") > -1 ? true : false
	const charKeyWords = charKey.split("-")
	const charKeyWordCount = charKey.split("-").length
	const charCodeKeys = [
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
		["large-single-curly-quote", 10080],
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
	let charKeyRequest = charCodeKeys.filter( key => key[0].includes(charKey) )
	let resultFromPoint = []
	let filterIterationCount = 0
	let filterExactKeyIndex = null

	charKeyRequest.length === 1 ? resultFromPoint = String.fromCodePoint(charKeyRequest[0][1]) : null

	if( charKeyRequest < 1 ){
		for( let a = 0; a < 1000000; a++ ){ // Get arbitrary # of results from Sring.fromCodePoint, I don't know how many results there are, and overdrafting will return an error, so you can't find out just by looping until no more results.
			resultFromPoint.push(String.fromCodePoint(a));
		}
	}

	return charKeyRequest.length > 1 ? charKeyRequest : resultFromPoint
}

/**
 * Capitalize first letter of string
 * Distinguished from String.toUpperCase which capitalizes all characters.
 * @param   {string}  string	String of words. First character should not be alaphanumeric.
 * @return  {string}  String with first character capitalized.
 *                    Example: "hello" -> "Hello"
 */
const toCapital = (string, lowerRest=0) => {
	isDataType(string, "string") ? null : logError(`toCapital() requires ${string} data type be a string.`)

	return string.slice(0, 1).toUpperCase().concat((lowerRest === 1 ? string.slice(1).toLowerCase() : string.slice(1)))
}

/**
 * Stringify integer affixed w/ ordinal
 * @param   {integer}  int Should be a whole number.
 * @return  {string}   Stringified int with ordinal. No spaces.
 *                     Example: 1 -> "1st"
 */
const toOrdinal = int => {
	var digits = [(parseInt(int)%10), (parseInt(int)%100)];
	var suffixPattern = [[1, 2, 3, 4], ["st", "nd", "rd", "th"]];

	return suffixPattern[0].includes(digits[0]) && (digits[1] < 11 || digits[1] > 13) ? int + suffixPattern[1][digits[0]-1] : int + suffixPattern[1][3];
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
const getMeridiem = string => string.slice(-2)

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
let toColonTime = ( date, hour12=0 ) => {
	let times = [ (hour12 ? date.getHours() : to12Hour(date.getHours())), date.getMinutes(), date.getSeconds() ];

	return times.map( t => setDigits(t, 2, 1) ).join(":");
}

/**
 * Stringify and transform integer to written number
 * @param   {integer}  int  Plain number
 * @return  {string}        Stringified int with commas
 *                          Example: 100000 -> "100,000"
 */
const toWrittenNumb = int => {
	isDataType(int, "number") ? null : logError(`toWrittenNumb() requires ${int} data type be a number.`)
	let number = int.toString()
	let readableInt = ""

	for( let a = number.length-1, b=0; a >= 0; a--, b++ ){
		// Read through number backwards (number[a--])
		// Use modulo to find every 3rd digit, excluding 0 because 0%3 === 3%3
		if( (b > 0) && ((b%3) === 0) ){ readableInt = readableInt.concat(","); }

		readableInt = readableInt.concat(number[a])
	}

	return readableInt.split("").reverse().join("")
}

/**
 * Real Price Format
 * @param   {integer/float}  number  [A number to conver to a real price]
 * @return  {string}                 [description]
 */
const toWrittenPrice = ( int, useSymbol=0 ) => { 
	isDataType(int, "number") ? null : logError(`toWrittenNumb() requires ${int} data type be a number.`)
	let number = int.toString()
	let parts = number.search(/[.]/g) > 0 ? number.split(".") : [number, ""]
	let prefix = useSymbol ? "$" : ""

	return prefix.concat(toWrittenNumb(parseInt(parts[0]))).concat(".").concat(setDigits(parts[1], 2))
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