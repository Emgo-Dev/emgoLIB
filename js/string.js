const logMessage = string => { console.log(string) }

const logError = string => { throw Error(string) }

const logTypeError = string => { throw TypeError(string) }

const dataTypes = ["boolean", "null", "undefined", "string", "number", "object", "symbol"]

const toValidDataType = string => string.toString().toLowerCase()

const isValidDataType = ( type ) => {
	var isValidDataTypeFilter = a => a === type
	var types = ["boolean", "null", "undefined", "string", "number", "object", "symbol"]
	
	return types.filter(isTypeMatcher).length > 0 ? true : false
}

const isDataType = ( data, type ) => {
	typeof type === "string" ? null : logTypeError(`The data type of (${type}) parameter needs to be a string.`)

	type = toValidDataType(type)
	isValidDataType(type) ? null : logError(`Given parameter value ("${type}") does not match one of these ("${types.join("\", \"")}") valid data types.`)

	return typeof data === type ? true : false
}

const checkType = ( data, type ) => {
	isDataType(data, type) ? true : logTypeError(`${data} was expected to be a ${type} data type`)
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