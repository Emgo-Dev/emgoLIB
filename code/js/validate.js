const toValidDataType = str => str.toString().toLowerCase()

const isValidDataType = str => {
	var types = ["boolean", "null", "undefined", "string", "number", "object", "symbol"]
	
	return types.filter( a => str === a ).length > 0 ? true : false
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