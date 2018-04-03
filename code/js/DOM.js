class DOM {
	constructor(){
		HTMLElement.prototype.ele = function( selector ){
			if( this.querySelectorAll(selector).length > 1 ){
				return this.querySelectorAll(selector);
			}else{
				return this.querySelector(selector);
			}
		}
		HTMLElement.prototype.measure = () => [this.offsetHeight, this.offsetWidth];
		HTMLElement.prototype.prev = function(){ return this.previousElementSibling; }
		HTMLElement.prototype.next = function(){ return this.nextElementSibling; }
		// ToDo Function: Index Of Among Sibling Elements
		HTMLElement.prototype.before = function(){ return this.before(this.ele); }
		HTMLElement.prototype.into = function(){ return this.append(this.ele); }
		HTMLElement.prototype.after = function(){ return this.after(this.ele); }
		HTMLElement.prototype.getText = function(){ return this.innerText; }
		HTMLElement.prototype.empty = function(){
			this.innerHTML = null;
			this.children.forEach( x => x.remove() );
		}
		HTMLElement.prototype.classes = function(){ return this.className.split(" "); }
		HTMLElement.prototype.hasClass = function( className ){ // Needs Refactoring
			if( this.classList.length < 1 ){ return false; }

			if( classList !== null ){
				for (var s=0; s<=this.classList.length; s++) {
					if (classList[s] === className) {
						return true;
					} else { }
				}

				return false;
			}else{ return null; }
		}
	}

	ele( selector ){
		if (document.querySelectorAll(selector).length > 1) {
			return document.querySelectorAll(selector);
		} else {
			return document.querySelector(selector);
		}
	}

	empty( element ){
		element.innerHTML = null;
	}

	/**
	 * Creates HTML Elements from provided structure
	 * @param  {array}  schemaCollection 	Collection of objects to use as schemas for
	 *                                    creating HTML elements. The object schemas'
	 *                                    properties represent aspects of an HTMLElement Node.
	 *
	 * @return  {array}                   Collection of created HTML elements.
	*/
  makeEle( schemaCollection = [] ){
		let elementCollection = [];
		let requiredProperties = ["Type"];

		// if( schemaCollection.length < 1 ){ throw Error("DOM.makeEle(): No object schemas were given."); }

		for( let schema of schemaCollection ){
			if( !requiredProperties.every( x => schema.hasOwnProperty(x) ) ){ return false; }
			elementCollection.push( document.createElement(schema.Type) );
			let currentElement = elementCollection[elementCollection.length - 1];

			if( schema.hasOwnProperty("Attributes") ){
				for( let attribute of schema.Attributes ){
					if( typeof attribute.shift !== "undefined" ){
						currentElement.setAttribute(attribute[0], attribute[1]);
					}else{
						attribute = Object.entries(attribute);
						currentElement.setAttribute(attribute[0][1], attribute[1][1]);
					}
				}
			}

			if( schema.hasOwnProperty("innerText") ){ currentElement.innerText = schema.Text; }

			if( schema.hasOwnProperty("Children") ){
				this.makeEle(schema.Children).forEach( x => currentElement.append( x ) );
			}
		}

		return elementCollection;
	}

	findParents( node, tagName = "", parents = [] ){
	  if( ![null, undefined].includes(node.parentElement) ){
	    let parent = node.parentElement;
	    if( parent.tagName.toLowerCase() === tagName.toLowerCase() ){ parents.push( parent ); }
	    findParents( parent, tagName, parents );
	  }

	  return parents;
	}

	findParent( node, tagName = "", parents = [] ){
	  if( ![null, undefined].includes(node.parentElement) ){
	    let parent = node.parentElement;
	    if( parent.tagName.toLowerCase() === tagName.toLowerCase() ){ parents.push(parent); }
	    console.log( node, tagName, parent.tagName );
	    findParent( parent, tagName, parents );
	  }

	  return parents[0];
	}

	findNear( node, selector = "" ){
	  if( ![null, undefined].includes(node.parentElement) ){
	    let parent = node.parentElement;
	    if( ![null, undefined].includes(parent.querySelector(selector)) ){
	      return parent.querySelector(selector);
	    }
	    findNear( parent, selector );
	  }

	  return [];
	}
};

module.exports = new DOM();
