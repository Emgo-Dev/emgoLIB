/////////////////////////////////////////////////////////
///                                                   ///
///                  Emgo JS Library                  ///
///                Michael Goldspinner                ///
///                 Emgo Development                  ///
///                    10/15/2017                     ///
///                                                   ///
///  ***********************************************  ///
///                                                   ///
///  Library contains general purpose functions and   ///
///  classes.                                         ///
///                                                   ///
/////////////////////////////////////////////////////////
///                                                   ///
///                   Dependencies                    ///
///                                                   ///
///  ***********************************************  ///
///                                                   ///
///              Site Settings & Paths                ///
///                                                   ///
/////////////////////////////////////////////////////////


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
* 
*/

function doForOf( func, arr ){
  // console.log("doForOf: Current counter at ", counter)
  arr.forEach( i => func )
}

function doFor( func, limit ){
  console.log("doFor(): Current iteration at ", limit)
  if( limit > 0 ){
        func
    return doFor( func, (limit-1) )
  }
}

/**
* textNode(): Returns the text node of an HTML element in the DOM
* @param  (element) An HTML element object
* @return (string)  The textNode contents of the elmement
*/

function textNode( element ){
  return element.innerText
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
* @return          (integer)  The ID for the time. Cancel time with window.clearInterval(@return)
*/

function delay( func, time ){
  return window.setTimeout( func, time )
}

/**
* updateBfromA(): The idea is to update one HTML element according to changes in another
* @param A (Uknown) Uknown
* @param B (Uknown) Uknown
*/

function updateBfromA( A, B ){
  // Empty SubCategory menu
  modifyTextNodeOf( scSelect, null )

  // #1: For each SubCategory of Category, create SubCategory element

  // #2: Append to SubCategory Menu
}

// updateSubCatList(): Update SubCategory list
function unilateralMenuUpdate( arrayPrime, arraySub, func ){
    
}
// unilateralMenuUpdate(dbAccounts)


///////////////////////////////////////
///                                 ///
///  String Functions & Prototypes  ///
///                                 ///
///////////////////////////////////////

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

/*
* joinBy(): Performs the String.join() method. Meant to extend context of original method name.
*/


String.prototype.search = function( string, regex ){
  if (string.search(regex) != -1) {
    console.log( "Found Result" )
    return "Found Result"
  } else {
    return "No Result"
  }
  // return string.regex(search);
}

String.prototype.stringFind = function( string, regex ){
  return string.match(regex);
}


////////////////////////
///                  ///
///  Data Functions  ///
///                  ///
////////////////////////

function sum( a, b ){
  return a + b;
}

function sumof( a ){
  var b = 0;
  a.forEach(function(c){
    b += c;
  })
  return b;
}

function mult( a, b ){
  return a * b;
}

function divide( a, b ){
  return a / b;
}

function gatherrange( a, b ){
  var c = [];
  while( a <= b ){
    c.push(a);
    a++;
  }
  return c;
}


///////////////////////
///                 ///
///  DOM Functions  ///
///                 ///
///////////////////////

var DOM = {
  ele(selector) {
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

  makeEle(ElementNodeList = null) {
    // This function accepts an array of objects with properties representing an element node in the DOM
    // Object properties should be
    // Type - The type of element
    // Attributes - An array of attribute objects in pairs of { Name,] Value,] }
    // Text - The elements text node content
    // Children - an array of children element objects

    // Collection of Elements
    var el = [];

    // Create Elements
    for( item of ElementNodeList ){
      el.push( document.createElement(item.Type) );

      item.Attributes.forEach( a => el[el.length-1].setAttribute(a.Name, a.Value) );

      el[el.length-1].innerText = item.Text;

      if( typeof item.Children != "undefined" && item.Children.length > 0 ){
        DOM.makeEle(item.Children).forEach( c => el[el.length-1].append( c ) )
      }
    }

    for (element of el) {
      // console.log(element); // Debug
      return el;
    }
  },

  modifyTextNodeOf( element, value ){
    element.innerHTML = value;
  }
}

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
};

function domEle(selector) {
  if (document.querySelectorAll(selector).length > 1) {
    return document.querySelectorAll(selector);
  } else {
    return document.querySelector(selector);
  }
}

function domEleNext(elementNode) {
  return elementNode.nextElementSibling;
}

function domElePlaceIn(elementNode, elementNodeTarget) {
  elementNodeTarget.append(elementNode);
}

function domElePlaceAfter(elementNode, elementNodeTarget) {
  elementNodeTarget.after(elementNode);
}

function domElePlaceBefore(elementNode, elementNodeTarget) {
  elementNodeTarget.before(elementNode);
}

function domEleSize(elementNode, measurement=null) {
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

function domEleClasses(elementNode) {
  return elementNode.className.split(" ");
}

function hasClass(elementNode, className) {
  var classList = elementNode.classList;

  for (var s=0; s<=elementNode.classList.length; s++) {
    if (classList[s] === className) {
      return true;
    } else { }
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

function removeClass(source, measure) {
  // Split source string into array
  var array = stringSplit(source, " ");
  // Declare result array
  var result = [];
  
  // Loop through source array
  for (s=0; s<=array.length; s++) {
    // Match to measure
    if (array[s] === measure) {
      // Do nothing if match found
      // return array.splice(s, 1);
    } else {
      // Push unmatched to new array
      result.push(array[s]);
    }
  }
  
  // Return new array without matches
  return result.join(" ");
}


////////////////////////////////
///                          ///
///  DOM Element Node Index  ///
///                          ///
///  ----------------------  ///
///                          ///
///  Determines an HTML      ///
///  Elements index among    ///
///  sibling elements        ///
///                          ///
////////////////////////////////

function domEleIndex(element) {
  /* Easier to Readify */
  var thing = element; // Used in console log at end
  var item = element ? element : null;
  var pool = element ? element.parentElement.children : null;
  var step = -1;

  /* Figure Calculations */
  while (item !== null) {
    step += 1;
    /* Debug */ console.log('Performing previousElementSibling ' + step + ' times on', item); /* Debug */
    item = item.previousElementSibling;
  }
  /* Debug */
  console.log('The Element ', thing, 'has an index of ' + step + ' from a pool of ' + thing.parentElement.children.length + ' siblings.');

  /* Return Result */
  return step;
}

function getArea(circle=false, radius=null, length, width, type) {
    if (circle == false && (length != null || width != null)) {
      return length * width + " " + type;
    } else if (circle == true && radius != null) {
      return Math.PI * radius * radius + type;
    } else {
      console.log("There was an error, could not return data.")
      return false;
    }
}

function getPerimeter(circle=false, radius=null, length, width, type) {
    if (circle == false && (length != null || width != null)) {
      return (length * 2) + (width * 2) + type;
    } else if (circle == true && radius != null) {
      return 2 * Math.PI * radius + type;
    } else {
      console.log("There was an error, could not return data.")
      return false;
    }
}

/////////////////////////////////
///                           ///
///      Property Count       ///
///                           ///
///  ----------------------   ///
///                           ///
///  Counts the number of     ///
///  properties in an object  ///
///                           ///
/////////////////////////////////

function propCount(prop) {
  var s = 0;
  var result =  {
    list: [],
    count() { return this.list.length; }
  };
  for (var p in prop) {
    result.list[s] = p;
    s += 1;
  }

  return result;
}


////////////////////////////////
///                          ///
///      States Object       ///
///                          ///
///  ----------------------  ///
///                          ///
///                          ///
////////////////////////////////



////////////////////////////////
///                          ///
///     Calendar Object      ///
///                          ///
///  ----------------------  ///
///                          ///
///  Calendar information    ///
///  and handling of dates   ///
///                          ///
////////////////////////////////

var emgoCAL = {
  Months: [
    ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  ],

  suffix(Date) {
    Date = typeof Date === "string" && !isNaN(Date) ? parseInt(Date) : Date;
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

    // // Is it a Single Digit?
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
}

emgoTIME = {
  simpleMeridiem( int ){
    if( int > 12 ){
      return "PM"
    }else{
      return "AM"
    }
  },

  meridiem( Time ){

  }
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


/////////////////////////////////
///                           ///
///            AJAX           ///
///                           ///
///  ----------------------   ///
///                           ///
///  Figuring out ajax below  ///
///                           ///
/////////////////////////////////


/*
* Ajax request for file path given in url parameter
*/
function ajaxsend(type, url, post) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
      return false;
  }
  httpRequest.onreadystatechange = ajaxget;
  httpRequest.open(type, url);
  httpRequest.send(post);
}

/*
* Extracts contents the return data from request_file().
* Matches against success/error condition
*/
function ajaxget() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      return httpRequest.responseText;
    } else {
      alert("AJAX error.");
    }
  }
}