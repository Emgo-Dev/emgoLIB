////
////////        Class
////////////////////////////////////////////////
//// DOM element targeting and manipulation
/**
 * Class that bundles some useful methods.
*/
let DOM = {
	ele( selector ){
		if (document.querySelectorAll(selector).length > 1) {
			return document.querySelectorAll(selector);
		} else {
			return document.querySelector(selector);
		}
	},

	empty( element ){
		element.innerHTML = null;
	},

	// Make HTML Element Node from Custom Object
		/*
		[
			{ // Each element is an object in this array (with these properties)
				Type: "element_tag",
				Attributes: [ // Each attribute is an object in this array
					{
						Name: "attibute_name",
						Value: "attribute_value"
					}
				],
				Text: "text_node"
			}
		]
		*/

	/**
	 * Builds HTML Element Node from Object Schematics
	 * @param 	{array}		objectSchematicCollection	Collection of object to use as schematics for
	 *                                            		creating HTML elements. The object schematics'
	 *                                            		properties represent aspects of an HTML Node.
	 *                                            		
	 *                                            		Schematics:
	 *                                            		Type - Element Tag Name
	 *                                             		Attributes - An array of attribute objects
	 * 													Should use two properties, Name for attribute
	 * 													name, and Value for attribute value
	 * 													Text - Value for element text node
	 * 													Children - Array of children element
	 * 													represented by object schematics
	 *
	 * @return 	{array}									Collection of created HTML elements.
	 */
	makeEle( objectSchematicCollection = null ){
		let elementNodeCollection = [];

		// Create Elements
		for( schematic of objectSchematicCollection ){
			elementNodeCollection.push( document.createElement(schematic.Type) );

			schematic.Attributes.forEach( x => elementNodeCollection[elementNodeCollection.length-1].setAttribute(x.Name, x.Value) );

			elementNodeCollection[elementNodeCollection.length-1].innerText = schematic.Text;

			if( typeof schematic.Children != "undefined" && schematic.Children.length > 0 ){
				DOM.makeEle(schematic.Children).forEach( x => elementNodeCollection[elementNodeCollection.length-1].append( x ) );
			}
		}

		// for( element of el ){ // console.log(element); // Debug }

		return elementNodeCollection;
	},

	modifyTextNodeOf( element, value ){
		element.innerHTML = value;
	}
}


////
////////        Functional Functions
////////////////////////////////////////////////
////
/**
 * Selects Element Nodes in DOM.
 * @param  	{string} 	cssSelector 	Build a CSS Selector to target the element you want
 * @return 			             		Will return either a single element or element collection
 */
function domEle( cssSelector ) {
	if (document.querySelectorAll(cssSelector).length > 1) {
		return document.querySelectorAll(cssSelector);
	} else {
		return document.querySelector(cssSelector);
	}
}

/**
 * Get the next
 * @param  {[type]} elementNode [description]
 * @return {[type]}             [description]
 */
function domEleNext( elementNode ){
	return elementNode.nextElementSibling;
}

function domElePrev( elementNode ){
	return elementNode.previousElementSibling;
}

function domEleIndex(element) {
	let step = -1;

	while( element ){
		step += 1;

		element = element.previousElementSibling;
	}

	return step;
}

function domEleInto( elementNode, elementNodeTarget ){
	elementNodeTarget.append(elementNode);
}

function domEleAfter( elementNode, elementNodeTarget ){
	elementNodeTarget.after(elementNode);
}

function domEleBefore( elementNode, elementNodeTarget ){
	elementNodeTarget.before(elementNode);
}

function domEleSize( elementNode, measurement=null ){
	switch (measurement) {
		case "height": 
			return elementNode.offsetHeight;
			break;
		case "width":
			return elementNode.offsetWidth;
			break;
		default:
			return [elementNode.offsetWidth, elementNode.offsetHeight];
			break;
	}
}

/**
* textNode(): Returns the text node of an HTML element in the DOM
* @param  (element) An HTML element object
* @return (string)  The textNode contents of the elmement
*/

function domEleText( element ){
  return element.innerText;
}

function domEleClasses( elementNode ){ return elementNode.className.split(" "); }
function domEleClasses( elementNode ){ return elementNode.classList; }

function domEleClass( elementNode, className ){ return elementNode.classList.contains( className ); }
function domEleClass( elementNode, className ){
	let classList = domEleClasses( elementNode );

	for( let a = 0; a <= classList.length; a++ ){
		if( className === classList[a] ){
			return true;
		}
	}

	return false;
}

// @function          removeClass()
//
// @description       removes a single class from an htmler
//                    To get HTML element class string
//                    from DOM do element.className
//
// $measure [string]  A regular expression to match for

function domEleRemoveClass( elementNode, className ){
	let classList = domEleClasses( elementNode );
	let result = [];
	
	for( s = 0; s <= classList.length; s++ ){
		if( classList[s] === className ){}
		else{
			result.push(classList[s]);
		}
	}
	
	return result.join(" ");
}


////
////////        Function Property Prototyping
////////////////////////////////////////////////
//// DOM Element Targeting and Manipulation
/**
 * Selects Element Nodes in DOM.
 * @param  	{string} 	cssSelector 	Build a CSS Selector to target the element you want
 * @return 			             		Will return either a single element or element collection
 */
function domEle( cssSelector ){
	if( document.querySelectorAll(cssSelector).length > 1 ){
		domEle.ele = document.querySelectorAll(cssSelector);
		return document.querySelectorAll(cssSelector);
	}else{
		domEle.ele = document.querySelector(cssSelector);
		return document.querySelector(cssSelector);
	}
}

domEle.next = function(){
	return this.ele.nextElementSibling;
}

domEle.prev = function(){
	return this.ele.previousElementSibling;
}

domEle.index = function(){
	let step = -1;
	let indexElement = this.ele;

	while( indexElement ){
		step += 1;
		indexElement = indexElement.previousElementSibling;
	}

	return step;
}

domEle.into = function( elementNodeTarget ){
	elementNodeTarget.append(this.ele);
}

domEle.after = function( elementNodeTarget ){
	elementNodeTarget.after(this.ele);
}

domEle.before = function( elementNodeTarget ){
	elementNodeTarget.before(this.ele);
}

domEle.size = function( measurement=null ){
	let measurements = [
		["width", "x"],
		["height", "y"]
	];

	if( measurements[0].includes(measurement) ){
		return this.ele.offsetWidth;
	}else if( measurements[1].includes(measurement) ){
		return this.ele.offsetHeight;
	}else{
		return [this.ele.offsetWidth, this.ele.offsetHeight];
	}
}

domEle.text = function(){
	return this.ele.innerText;
}

domEle.classes = function(){
	return this.ele.className.split(" ");
}

domEle.classes = function(){
	return this.ele.classList;
}

domEle.class = function( className ){
	return this.ele.classList.includes( className );
}

domEle.class = function( className ){
	let classList = domEle.classes();

	for( let a = 0; a <= classList.length; a++ ){
		if( className === classList[a] ){
			return true;
		}
	}

	return false;
}

domEle.empty = function(){
	this.ele.innerHTML = null;
}

// @function          removeClass()
//
// @description       removes a single class from an htmler
//                    To get HTML element class string
//                    from DOM do element.className
//
// $measure [string]  A regular expression to match for

/**
 * Removes a single class from HTML element. 
 * @return {string}           The new className
 */
domEle.removeClass = function( className ){
	let classList = domEle.classes();
	let result = [];
	
	for( s = 0; s <= classList.length; s++ ){
		if( classList[s] === className ){}
		else{
			result.push(classList[s]);
		}
	}
	
	return result.join(" ");
}


////
////////        DOM Prototypes
////////////////////////////////////////////////
////
HTMLElement.prototype.prev = function(){
	return this.previousElementSibling;
}

HTMLElement.prototype.next = function(){
	return this.nextElementSibling;
}

HTMLElement.prototype.measure = function(measurement=null){
	return [this.offsetHeight, this.offsetWidth];
}

HTMLElement.prototype.classes = function(){
	return this.className.split(" ");
}

HTMLElement.prototype.hasClass = function(className){
	var classList = this.classList != 0 ? this.classList : null;;

	if( classList !== null ){
		for (var s=0; s<=this.classList.length; s++) {
			if (classList[s] === className) {
				return true;
			} else { }
		}

		return false;
	}else{ return null; }
}


////
////////        AJAX
////////////////////////////////////////////////
////

function ajaxREQ(type, url, post) {
	let httpRequest = new XMLHttpRequest();

	if( !httpRequest ){ return false; }

	httpRequest.onreadystatechange = ajaxget;
	httpRequest.open(type, url);
	httpRequest.send(post);
}

function ajaxRET() {
	if( httpRequest.readyState === XMLHttpRequest.DONE ){
		if( httpRequest.status === 200 ){
			return httpRequest.responseText;
		}else{
			alert("AJAX error.");
		}
	}
}