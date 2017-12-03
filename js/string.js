////
////////        String
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

/////////////////////////////////
///                           ///
///       Typing Script       ///
///                           ///
///  ----------------------   ///
///                           ///
///  Automated typing         ///
///                           ///
/////////////////////////////////

function typeIt(string, to) {
  var hold = [];
  var step = 1;
  var tick = setInterval(function() {
    if(step == string.length) { clearInterval(tick); };
    hold.push(string.slice(step - 1, step));
    step += 1;
    to.innerHTML = hold.join('');
  }, 50);
}
