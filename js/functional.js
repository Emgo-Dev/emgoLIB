////
////////        Functional Functions
////////////////////////////////////////////////
////

const logMessage = string => { console.log(string) }

const logError = string => { throw Error(string) }

const logTypeError = string => { throw TypeError(string) }

const dataTypes = ["boolean", "null", "undefined", "string", "number", "object", "symbol"]

const toValidDataType = string => string.toString().toLowerCase()

const isValidDataType = type => { 
	var types = ["boolean", "null", "undefined", "string", "number", "object", "symbol"]
	
	return types.filter(a => type === a).length > 0 ? true : false
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

function eventOn( element, event, func ){
	if( element.length > 1 && typeof element.attributes == "undefined" ){
		for( node of element ){
			node.addEventListener(event, func);
		}
	}else{
		element.addEventListener(event, func);
	}
}

/**
 * Call function periodically
 * @param		{function}	func	Contained code to run.
 * @param		{integer}		time	Delay between execution in milisecond
 * @return	{integer}					Interval ID. Cancel execution with window.clearInterval(return)
 */
const interval = ( func, time ) => window.setInterval( func, time )

/**
 * Call function after specified time
 * @param		{function}	func	The code to run
 * @param		{integer}		time	Delay between executing @func in miliseconds
 * @return	{integer}					The ID for the time. Cancel time with window.clearTimeout(@return)
 */
const delay = ( func, time ) => window.setTimeout( func, time )

const buildProperties = ( values, keys ) => {
	let x = 0;
	let i = 0;
	let o = {};

	for( let val of values ){
		if( !keys[i] ){
			o[x] = val;
			x += 1;
		}else{
			o[keys[i]] = val;
		}

		i += 1;
	}

	return o;
}

const countProperties = ( obj ) => { return Object.keys(obj).length; }