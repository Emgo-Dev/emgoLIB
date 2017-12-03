///////////////////////////////////////
///                                 ///
///  Functional Programming         ///
///                                 ///
///  **********************         ///
///                                 ///
///  Functions conforming thereof.  ///
///                                 ///
//////////////////////////////////////////
///            PRINCIPLES              ///
///  Purity (Pure/Impure Functions)    ///
///  Mutability (Mutable/Immutable)    ///
///  Higher-Order Functions            ///
///  Closures                          ///
///  Composition                       ///
///  Recursion                         ///
//////////////////////////////////////////


/**
* textNode(): Returns the text node of an HTML element in the DOM
* @param  (element) An HTML element object
* @return (string)  The textNode contents of the elmement
*/

function htmlTextOf( element ){
  return element.innerText;
}

/**
* interval(): Perform function periodically
* @param  func     (function) The code to run
* @param  time     (integer)  Delay between executing @func in miliseconds
* @return          (integer)  The ID for the time. Cancel time with window.clearInterval(@return)
*/

function interval( func, time ){
  return window.setInterval( func, time )
}

/**
* delay(): Perform function after specified time
* @param  func     (function) The code to run
* @param  time     (integer)  Delay between executing @func in miliseconds
* @return          (integer)  The ID for the time. Cancel time with window.clearTimeout(@return)
*/

function delay( func, time ){
  return window.setTimeout( func, time )
}

/**
* ABListUpdate(): The idea is to update one HTML element according to changes in another
* @param A (Uknown) Uknown
* @param B (Uknown) Uknown
*/

function ABListUpdate( listA, listB, indexA, indexB ){
  modifyTextNodeOf( scSelect, null )

  // #1: For each SubCategory of Category, create SubCategory element

  // #2: Append to SubCategory Menu
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