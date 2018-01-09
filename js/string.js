////
////////        String Functions
////////////////////////////////////////////////
////

/**
 * Capitalize first letter
 * @return  {string}  String with capitalized leading character
 */
const toCapital = string => { return string.slice(0, 1).toUpperCase() + string.slice(1); }

String.prototype.toCapital = function(){
  return string.slice(0, 1).toUpperCase() + string.slice(1);
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