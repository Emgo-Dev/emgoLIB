var DOM = {
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

function domEle( cssSelector ) {
	if (document.querySelectorAll(cssSelector).length > 1) {
		return document.querySelectorAll(cssSelector);
	} else {
		return document.querySelector(cssSelector);
	}
}

function domEleNext( elementNode ){ return elementNode.nextElementSibling; }
function domElePrev( elementNode ){ return elementNode.previousElementSibling; }

function domEleIndex(element) {
	let step = -1;

	while( element ){
		step += 1;

		element = element.previousElementSibling;
	}

	return step;
}

function domEleInto( elementNode, elementNodeTarget ){ elementNodeTarget.append(elementNode); }
function domEleAfter( elementNode, elementNodeTarget ){ elementNodeTarget.after(elementNode); }
function domEleBefore( elementNode, elementNodeTarget ){ elementNodeTarget.before(elementNode); }

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
////////        DOM Prototypes
////////////////////////////////////////////////
////

Object.prototype.prev = function(){
	return this.previousElementSibling; }
Object.prototype.next = function(){
	return this.nextElementSibling; }
Object.prototype.measure = function(measurement=null){
	return [this.offsetHeight, this.offsetWidth]; }
Object.prototype.classes = function(){
	return this.className.split(" "); };
Object.prototype.hasClass = function(className){
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