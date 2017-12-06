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

suffix( Date ){
	if( typeof Date !== "string" ){
		Date = parseInt(Date);
	}

	var single = Date % 10; // Single Digit
	var tenth = Date % 100; // Both Digits
	var suffs = [
	  [1, 2, 3, 4], // Pattern
	  ["st", "nd", "rd", "th"] // Suffixes
	];

	if( suffs[0].includes(single) && (tenth < 11 || tenth > 13) ){
	  return tenth+suffs[1][single-1];
	} else {
	  return tenth+suffs[1][3];
	}

	// [Old] Is it a Single Digit?
    // if( Date.length < 2 ){
    //   return !suffs[0].includes(parseInt(Date)) ? Date.concat(suffs[1][3]) : Date.concat(suffs[1][Date-1]);
    // }

    // // Is it a Double Digit?
    // else if( Date.length > 1 ){
    //   // Is it a teen? (11, 12, 13)
    //   if( parseInt(Date.slice(0,1)) === 1 ){
    //     return Date.concat(suffs[1][3]);
    //   }

    //   // Does it match the Suffix Pattern?
    //   else if( suffs[0].includes(parseInt(Date.slice(1,2))) ) {
    //     return Date.concat(suffs[1][parseInt(Date.slice(1,2))-1]);
    //   }
    // }
}