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