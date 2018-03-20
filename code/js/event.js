let eventOn = ( element, event, func ) => {
	if( element.length > 1 && typeof element.tagName == "undefined" ){
		[...element].map( e => e.addEventListener(event, func) );
	}else{
		element.addEventListener(event, func);
	}
}