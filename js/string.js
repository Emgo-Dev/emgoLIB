////
////////        String Functions
////////////////////////////////////////////////
////

/**
 * Capitalize first letter
 * The focus of this functions action is to capitalize the first letter of a selection of text as is a common practice in literature for leading words in a sentence or nouns. Therefore the name 'toCapital' distinguishes itself from 'toUpperCase' or 'toLowerCase'.
 * 
 * @return	{string}	The given parameter with its' leading character capitalized.
 */
const toCapital = string => { return string.slice(0, 1).toUpperCase() + string.slice(1); }

String.prototype.toCapital = function(){
	return string.slice(0, 1).toUpperCase() + string.slice(1);
}

/**
 * Determine ordinal suffix
 * @return	{string}	The given integer with an ordinal suffix. No spacing between.
 */
const toSuffix = int => {
	int = parseInt(int);
	var digits = [ (int % 10), (int % 100)];
	var suffix = [[1, 2, 3, 4], ["st", "nd", "rd", "th"]];

	return suffix[0].includes(digits[0]) && (digits[1] < 11 || digits[1] > 13) ? int + suffix[1][digits[0]-1] : int + suffix[1][3];
}

/**
 * Determine meridiem
 * @param		{integer}	int	Hour to determine appropriate meridiem of
 * @return	{string}			The meridiem of int.
 */
const getMeridiem = int => {
	int = parseInt(int);
	
	return int > 11 ? "pm" : "am";
}

/**
 * Affix meridiem
 * @param		{integer}	int	Hour to determine appropriate meridiem of
 * @return	{string}				The int concatenated with meridiem. Example: "1pm".
 */
const toMeridiem = int => {
	int = parseInt(int);
	
	return int > 11 ? int + "pm" : int + "am";
}

/**
 * Convert & affix meridiem
 * @param		{integer}	int	Hour to determine appropriate meridiem of
 * @return	{[type]}     	The int (12 hour format) concatenated with meridiem.
 */
const toMeridiem12 = int => {
	int = parseInt(int);
	
	return int > 11 ? int%12 + "pm" : int%12 + "am";
}

/**
 * Type Into Element
 * Inserts text into an element letter by letter to imitate typing.
 * @param	{HTMLelement}	elementNode	Element to type string into
 */
String.prototype.typeInto( elementNode ){
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