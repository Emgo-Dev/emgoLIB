////
////////        String Functions
////////////////////////////////////////////////
////

/*
* splitBy(): Performs the String.split() method. Meant to extend context of original method name.
*/

String.prototype.splitBy = function( separator ){
  return this.split(separator)
}

/*
* joinBy(): Performs the String.join() method. Meant to extend context of original method name.
*/

String.prototype.joinBy = function( separator ){
  return this.join( separator )
}

String.prototype.lookFor = function( string, regex ){
  if (string.lookFor(regex) != -1) {
    return 1
  } else {
    return 0
  }
}

String.prototype.stringFind = function( string, regex ){
  return string.match(regex);
}

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