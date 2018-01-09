////
////////        String Functions
////////////////////////////////////////////////
////


String.prototype.toCapital = function(){
	return this[0].toUpperCase().concat(this.slice(1,this.length));
}

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

const toSuffix = int => {
  int = parseInt(int);
  var digits = [ (int % 10), (int % 100)];
  var suffix = [[1, 2, 3, 4], ["st", "nd", "rd", "th"]];

  return suffix[0].includes(digits[0]) && (digits[1] < 11 || digits[1] > 13) ? int + suffix[1][digits[0]-1] : int + suffix[1][3];
}