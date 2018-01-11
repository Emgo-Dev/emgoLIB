////
////////        Functional Functions
////////////////////////////////////////////////
////

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
function interval( func, time ){
	return window.setInterval( func, time )
}

/**
 * Call function after specified time
 * @param		{function}	func	The code to run
 * @param		{integer}		time	Delay between executing @func in miliseconds
 * @return	{integer}					The ID for the time. Cancel time with window.clearTimeout(@return)
 */
function delay( func, time ){
	return window.setTimeout( func, time )
}

function propCount( property ) {
	let s = 0;
	let result =  {
		list: [],
		count() { return this.list.length; }
	};

	for( let p in prop ){
		result.list[s] = p;
		s += 1;
	}

	return result;
}