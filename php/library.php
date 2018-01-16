<?php

/////////////////////////////////////////////////////////
///                                                   ///
///                 Emgo PHP Library                  ///
///                Michael Goldspinner                ///
///                 Emgo Development                  ///
///                    01/12/2017                     ///
///                                                   ///
///  ***********************************************  ///
///                                                   ///
///  Library contains general purpose functions and   ///
///  classes.                                         ///
///                                                   ///
///  ***********************************************  ///
///                                                   ///
///                   $F_AuthField                    ///
///           Authentication of Form Fields           ///
///                                                   ///
///                    $F_RediTo                      ///
///         Redirect to another page with PHP         ///
///                                                   ///
///                     $F_gDate                      ///
///     A complete function to getting dates (WIP)    ///
///                                                   ///
///                    $F_pCheck                      ///
///     Applies class to nav element upon matching    ///
///           querystring with parameter              ///
///                                                   ///
///                     $C_Page                       ///
///       A Class/Object for handling all large       ///
///            scale page related features            ///
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

function domBreak() {
    echo "<br/>";
}

function echo( $string ){ echo $string; }

function echoVar( $varDump ){
    echo "<pre>";
    var_dump($varDump);
    echo "</pre>";
}

function validForm(){
    if( $_SERVER["REQUEST_METHOD"] === "POST" && $_POST["Submit"] === "Submit" ){
    }else{
        die("Form Failed. Request Method not 'POST' or form Submit value/attribute not 'Submit'.");
    }
}

/**
* isNone(): Returns null if a string value is "None" from select menus.
*/
function isNone($value) {
    if ($value == "None" || $value == "" || !isset($value)) {
        return NULL;
    } else {
        return $value;
    }
}

/**
 * $F_AuthField  | Authenticate Form Fields
 * ---------------------------------------------------------
 * Cleans a user's input from form fields for authentication
 */
function valString( $str ){
    gettype($str) !== "string" ? die("Data type of parameter given to valString() was not a 'string'.");
    $a = trim($a);              // Removes leading/trailing whitespace
    $a = stripslashes($a);      // Removes slashes
    $a = strip_tags($a);        // Removes HTML Tags, list allowed tags in second argument
    $a = htmlspecialchars($a);  // Converts special charactek to equivalent HTML entity

    return $a;
}

function valInt( $int ){
    gettype($int) !== "number" ? die("Data type of parameter given to valInt() was not a 'number'.");
}

function valFloat( $float ){
    return round($float, 2);
}

function valNone( $str ){
    return strtolower($str) === "none" || $str === "" || !isset($str) ? NULL : $str;
}

function valDate( $date ){
    return gettype($date) === "string" ?
        count(explode("-", $date)) === 3 && strlen(implode("", explode("-", $date))) === 8 ? $date :
        die("Incorrect date format of parameter.\nBad Result: ".count(explode("-", $date))." ".strlen(implode("", explode("-", $date)))) :
    die("Incorrect data type of paramter. Bad Result: ".gettype($date));
}

function validDate( $date ){
    $t = array();
    gettype($date) === "string" ? array_push($t, 1) : null;
    count(explode("-", $date)) === 3 ? array_push($t, 1) : null;
    strlen(implode("", explode("-", $date))) === 8 ? array_push($t, 1) : null;

    if( count($t) === 3) {
        return $date;
    }else{ 
        die("Incorrect Date Format\nBad Result: ".gettype($date)." ".count(explode("-", $date))." ".strlen(implode("", explode("-", $date))));
    }
}

function validString( $string ){
    if( gettype($string) ){
        return validate($string);
    }else{ die("Not a string"); }

}

function validInt( $int ){
    if( gettype($int) ){
        return validate($int);
    }else{ die("Not an integer"); }

}

function validDouble( $double ){
    return round($double, 2);
}


///////////////////////////////////////////////
///                                         ///
///  HTTP HEADER                            ///
///                                         ///
///  ************                           ///
///                                         ///
///  Functions that deal with page          ///
///  loading and redirection.               ///
///                                         ///
//////////////////////////////////////////////////////////////////////////
///                              WARNING                               ///
///  Contains functions that must be called before the HTML Document.  ///
//////////////////////////////////////////////////////////////////////////
///  PRE HTML FUNCTIONS  ///
////////////////////////////
    /// header()
    /// session_start()
    /// setcookie()


/**
 * $F_RediTo | redirect() | Redirects user to another page
 * @param  [String] $location [The url to redirect to]
 */
function redirect($location) {
    header("Location: " . $location);
};


///////////////////////////////////////////////
///                                         ///
///  Class Objects                          ///
///                                         ///
///  *************                          ///
///                                         ///
///  These functions must be                ///
///  called before the HTML Document.       ///
///                                         ///
///////////////////////////////////////////////


function prettyDateDiff($dateOne, $dateTwo) {
    // Variables
    $dateOne = isset($dateOne) && strtotime($dateOne) ? strtotime($dateOne) : null;
    $dateTwo = isset($dateTwo) && strtotime($dateTwo) ? strtotime($dateTwo) : null;
    
    $periods = array(
        array("second", 1),
        array("minute", 60),
        array("hour", 60),
        array("day", 24),
        array("week", 7),
        array("month", 4.35),
        array("year", 12)
    );
    
    // Validate
    if( !$dateOne || !$dateTwo ) { return "Improper Parameter."; }

    // Future or Past
    if( $dateOne > $dateTwo ) {
        $difference = $dateOne - $dateTwo;
        $tense = "ago";
    } else {
        $difference = $dateTwo - $dateOne;
        $tense = "from now";
    }

    // Present
    if( $difference < 900 ) { return "now"; }

    // Debug / Testing
    echo "Difference: ".$difference." ".$periods[0][0]."s<br/>";

    // Safe Variable to Calculate
    $figure = $difference;

    // Calculate
    for( $index = 1; ($figure >= 1 && ($figure / $periods[$index][1]) >= 1) && $index < count($periods); $index++ ) {
        // Debug / Testing
        echo "Figuring ".$figure." / ".$periods[$index][1];

        // Figure
        $figure /= $periods[$index][1];

        // Plurality Check
        if( $figure != 1) { $periods[$index][0].="s"; }

        // Debug / Testing
        echo " = ".round($figure)." ".$periods[$index][0]."<br/>";
    }
    
    // Result
    return round($figure)." ".$periods[$index-1][0]." ".$tense;
}

/**
 * $F_pCheck | Page Check
 * --------------------------------------------------
 * Applies class to nav item if page query matches item
 * index placed in parameter
 *
 * @param [String] $a [The GET parameter to match for]
 * @param [String] $b [The GET value to match]
 * @param [String] $c [The class value to apply]
 *
 * How to Use
 * <li class="<?php pageCheck('1'); ?>"><a href="?page=1">Link</a></li>
 * --------------------------------------------------
 */
function pageCheck($a, $b, $c) {
    if ( isset($_GET[$a]) && $_GET[$a] === $b ) {
        echo $c;
    } else {
        return FALSE;
    }
}

function getMatch($a, $b, $c) {
    if ( isset($_GET[$a]) && $_GET[$a] === $b ) {
        echo $c;
    } else {
        return FALSE;
    }
}

function echo_html_select($attr_name=null, $option_list=null) {
    $attr_name = "name=".$attr_name;
    if( isset($option_list) && count($option_list) > 0 ) { $option_list = $option_list; }
    else { $option_list = null; }

    echo "<select ".$attr_name.">";
    for ( $option_counter = 0; $option_counter < count($option_list); $option_counter++ )
    {
        echo "<option value=\"".$option_list[$option_counter]."\">".$option_list[$option_counter]."</option>";
    }
    echo "</select>";
}

function makeEle( $ElementCollection = null ){
    // This function generates HTML from $ElementCollection, an array of associative arrays which represent parts of an element
        /* Expected Structure
            array(
                array( // Each element is a collection
                    Type: "NAV", // The elements tag name
                    Attributes: array( // A collection of associative arrays
                        array(
                            Name: "id",
                            Value: "NavigationMenu"
                        )
                    ),
                    Text: null
                )
            )
        */

    // This function accepts an array of objects with properties representing an element node in the DOM
    // Object properties should be
    // Type - The type of element
    // Attributes - An array of attribute objects in pairs of { Name,] Value,] }
    // Text - The elements text node content
    // Children - an array of children element objects

    $elSingleTag = array("input", "hr");

    // Collection of data
    $el = array();
    $elEnds = array();
    $elementString = "";
    $elementCount = 0;

    // For Each object of collection
        // Create Element
    foreach( $ElementCollection as $Element ){
        isset($Element["Type"]) && strlen($Element["Type"]) > 0 ? $hasType = TRUE : $hasType = FALSE;
        isset($Element["Attributes"]) && count($Element["Attributes"]) > 0 ? $hasAttributes = TRUE : $hasAttributes = FALSE;
        isset($Element["Text"]) && strlen($Element["Text"]) > 0 ? $hasText = TRUE : $hasText = FALSE;
        isset($Element["Children"]) && count($Element["Children"]) > 0 ? $hasChildren = TRUE : $hasChildren = FALSE;

        // Begin Element Tag
            // Leave the closing bracket off to allow for adding attributes
            // This is not necessary in JS beca\use of DOM API
        array_push( $el, "<" . strtolower($Element["Type"]));

        // Store End Element Tag
            // Ignore if the element is a single tag element
            // Keep track of all closing tags for concatenated elements
            // Necessary in PHP because it lacks the DOM API. all elements are hard-written as strings
            // Rather than searching the finished string for all created elements, just store their closing tags as created and cocnat in order to the final string.
        if( !in_array( strtolower($Element["Type"]), $elSingleTag )){
            array_push( $elEnds, "</" . strtolower($Element["Type"]) . ">" );
        };

        if( $hasAttributes ){
            foreach( $Element["Attributes"] as $Attribute ){
                $attributeCount = 0; // Current Index
                $attributeSpacing = " "; // Controls space between attributes

                // Add attributes
                $el[$elementCount] = $el[$elementCount] . $attributeSpacing . $Attribute["Name"] . "=\"" . $Attribute["Value"] . "\"";
            };
        } // Finished Adding Attributes

        // Close element opening tag
        $el[$elementCount] = $el[$elementCount] . ">";

        // Add text to element string
        if( $hasText ){
            $el[$elementCount] =  $el[$elementCount] . $Element["Text"];
        }

        // Manage Children
        if( isset($Element["Children"]) && count($Element["Children"]) > 0 ){
            $childElements = makeEle( $Element["Children"] );
            $el[$elementCount] = $el[$elementCount] . $childElements;
        }else{
            // $el[$elementCount] = $el[$elementCount] . $elEnds[$elementCount];
        }

        // Add tag to string
        $el[$elementCount] = $el[$elementCount] . $elEnds[$elementCount];

        $elementCount += 1;
    }

    foreach( $el as $tag ){
        $elementString = $elementString . $tag;
    }

    return $elementString;

}
?>