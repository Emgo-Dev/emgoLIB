// GOING TO BE USING SIMPLE COMMENT-DOCUMENTATION. KEEPING THIS FILE EASIER TO READ WITH TEST RESULTS FOR EACH FUNCTION
// SHOWING TEST RESULTS DISPLAYS EXPECTED INPUTS AND EXPECTED FAILURES FOR INCORRECT INPUTS
// DISPLAYS BEST USE OF THE FUNCTIONS AS WELL, RATHER THAN OFFERING A DESCRIPTION, AND PARAMETER CONSTRAINTS
// FULL DOCUMENTATION OF CODE CAN BE GIVEN IN A SEPARATE DOCUMENTATION DIRECTORY DISCUSSING THEORY, PRACTICE, SYNTAX, ETC.
/*
  toCapital("fooBar") -> "Foo Bar"
  toCapital("fooBar", 1) -> "Foo bar"
*/
let toCapital = ( str, lowAll = 0 ) => {
    if( typeof str !== "string" ){ throw TypeError(`toCapital() requires first parameter to be a string. The data type of given value was ${typeof str}`); }
    if( typeof lowAll !== "number" ){ throw TypeError(`toCapital() requires second parameter to be a number. Default (0) ignores case of rest of string, on (1) de-capitalizes rest of string.`); }

    return str.slice(0, 1).toUpperCase().concat( (lowAll ? str.slice(1).toLowerCase() : str.slice(1)) );
}

/*
  toOrdinal(1) -> "1st"
  toOrdinal("1") -> "1st"
  toOrdinal("1.5") -x "1.5st"
  toOrdinal("first") -x "firstth"
  toOrdinal("second") -x "secondth"
*/
let toOrdinal = int => {
    // ONLY CHECK DATA TYPE OF GIVEN PARAMETER
    // DOESN'T CHECK WHETHER THE GIVEN PARAMETER IS A REAL INTEGER NUMBER, WHETHER PARSED OR NOT
    // FAIL CASE PARAMETER VALUES: "first", 1.5, "1.5"
    if( !["string", "number"].includes(typeof int) ){ throw TypeError(`toOrdinal() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); }
    let digits = [(parseInt(int)%10), (parseInt(int)%100)];
    let pattern = [[1, 2, 3, 4], ["st", "nd", "rd", "th"]];

    return pattern[0].includes(digits[0]) && (digits[1] < 11 || digits[1] > 13) ? int + pattern[1][digits[0]-1] : int + pattern[1][3];
}

/*
  to12Hour(0) -> 12
  to12Hour(11) -> 11
  to12Hour(12) -> 12
  to12Hour(13) -> 1
  to12Hour(24) -> 12
  to12Hour(25) -> 1
*/
let to12Hour = int => {
    // ONLY HANDLES CONVERTING PATTERNS OF INTEGERS BETWEEN PERIODS OF 12 DOWN TO 12 HOUR TIME FORMATS
    // DOESN'T RETURN DATA OF ORIGINAL GIVEN INTEGER WHICH CAN BE USED TO DETERMINE THE 12 HOUR TIME AFTER SO MANY DAYS
    // ie: 72 HOURS IS MIDNIGHT ON THE THIRD DAY BUT FUNCTION WOULD ONLY RETURN 12 DUE TO 12 AM
    // if( !["string", number"].includes(typeof int) ){ throw TypeError(`to12Hour() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); }
    if( isNaN(parseInt(int)) ){ throw TypeError(`to12Hour() requires first parameter to contain a usable number. The data of given value was ${int} and is Not-A-Number (NAN)}`); }
    let num = parseInt(int);

    return [0, 12, 24].includes(num) ? 12 : num % 12;
}

/*
toMeridiem(0) -> "12am"
toMeridiem(11) -> "11am"
toMeridiem(12) -> "12pm"
toMeridiem(13) -> "1pm"
toMeridiem(24) -> "12am"
toMeridiem(25) -> "1am"
getMeridiem("7amam") -x "amam"
getMeridiem("7ampm") -x "ampm"
getMeridiem("7pmpm") -x "pmpm"
getMeridiem("7pmam") -x "am"
getMeridiem("7pm7am") -x "am"
*/
let toMeridiem = int => {
    // SAME PROBLEMS AS OUTLINED IN to12Hour()
    if( !["string", "number"].includes(typeof int) ){ throw TypeError(`toMeridiem() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); }
    if( isNaN(parseInt(int)) ){ throw TypeError(`toMeridiem() requires first parameter to contain a usable number. The data of given value was ${int} and is Not-A-Number (NAN)}`); }
    let med = int < 24 ? int > 11 ? "pm" : "am" : "am";
    let num = parseInt(int);

    return [0, 12, 24].includes(num) ? `12${med}` : `${num % 12}${med}`;
}

/*
  getMeridiem("7am") -> "am"
  getMeridiem("7pm") -> "pm"
  getMeridiem("7") -x "7"
  getMeridiem(7) -x TypeError: str.includes is not a function
*/
let getMeridiem = str => str.slice( str.search( ["am","pm"].filter( r => str.includes(r) )[0] ) );

/*
  toDigits("0", 1) -> "0"
  toDigits("0", 2) -> "00"
  toDigits("01", 1) -> "01"
  toDigits("01", 2) -> "01"
  toDigits("01", 3) -> "001"
  toDigits("01", 3, 1) -> "010"
  toDigits("10", 3) -> "100"
*/
let toDigits = ( str = 0, len = 1, x = 0 ) => [str.padStart(len, "0"), str.padEnd(len, "0")][x > 0 ? 1 : 0];

/*
  setDigits("0", 1) -> "00"
  setDigits("0", 2) -> "000"
  setDigits("01", 1) -> "001"
  setDigits("01", 2) -> "0001"
  setDigits("01", 3) -> "00001"
  setDigits("01", 3, 1) -> "01000"
  setDigits("10", 3) -> "00010"
*/
let setDigits = ( str = 0, len = 1, x = 0 ) => [str.padStart(str.length + len, "0"), str.padEnd(str.length + len, "0")][x > 0 ? 1 : 0];

/*
getDecimals("1") -x "1"
getDecimals("1.") -x ""
getDecimals("1.5") -> "5"
getDecimals("1.50") -> "50"
getDecimals("1.500") -> "500"
getDecimals("10.500") -> "500"
getDecimals("10..500") -x ".500"
getDecimals("10...500") -x "..500"
*/
let getDecimals = str => {
    if( !["string", "number"].includes(typeof str) ){ throw TypeError(`toWrittenNumb() requires first parameter to be a string or number. The data type of given value was ${typeof str}.`); }
    if( typeof str == "number"){ str = String(str % 1).slice(2); }

    return str.slice(str.search("\\.") + 1);
}

/*
toWrittenNumb(1) -> "1"
toWrittenNumb(10) -> "10"
toWrittenNumb(100) -> "100"
toWrittenNumb(1000) -> "1,000"
toWrittenNumb(0000) -> "0"
toWrittenNumb(1000000) -> "1,000,000"
toWrittenNumb(0000000) -> "0"
*/
let toWrittenNumb = int => {
    if( !["string", "number"].includes(typeof int) ){ throw TypeError(`toWrittenNumb() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); }
    let num = String(int % 1 < 1 && int % 1 > 0 ? parseFloat(int) : parseInt(int));
    let decI = num.search("\\.");
    let isFloat = decI > -1 ? true : false;
    let wNum = "";

    if( isFloat ){ wNum = wNum.concat(num.slice(decI).split("").reverse().join("")); }

    for( let a = isFloat ? decI - 1 : num.length - 1, b = 0; a >= 0; a--, b++ ){
        if( (b > 0) && ((b%3) === 0) ){ wNum = wNum.concat(","); }

        wNum = wNum.concat(num[a])
    }

    return wNum.split("").reverse().join("")
}

/*
  // RETURNING ARBITRARY DATES IN BELOW EXAMPLES
  // ONLY MEANT TO SHOW HOW YOU SHOULD RETRIEVE PROPER ISO DATE STRINGS
  new Date().toISOString() -> "2018-03-21T07:15:30.500Z"
  Date() -x "Tue Mar 20 2018 20:15:21 GMT-0400 (EDT)"

  getIsoDate("2018-03-21T07:15:30.500Z") -> "2018-03-21"
  getIsoYear("2018-03-21T07:15:30.500Z") -> "2018"
  getIsoMonth("2018-03-21T07:15:30.500Z") -> "03"
  getIsoDay("2018-03-21T07:15:30.500Z") -> "21"
  getIsoTime("2018-03-21T07:15:30.500Z") -> "07:15:30"
  getIsoHour("2018-03-21T07:15:30.500Z") -> "07"
  getIsoMinute("2018-03-21T07:15:30.500Z") -> "15"
  getIsoSecond("2018-03-21T07:15:30.500Z") -> "30"
*/
const getIsoDate = str => str.match(/\w{4}-\w{2}-\w{2}/)[0]
const getIsoYear = str => str.match(/^\w{4}/)[0]
const getIsoMonth = str => str.match(/\w{2}(?=-\w{2}T)/)[0]
const getIsoDay = str => str.match(/\w{2}(?=T)/)[0]
const getIsoTime = str => str.match(/\w{2}:\w{2}:\w{2}/)[0]
const getIsoHour = str => str.match(/\w{2}(?=:)/)[0]
const getIsoMinute = str => str.match(/\w{2}(?=:\w{2}\.)/)[0]
const getIsoSecond = str => str.match(/\w{2}(?=\.)/)[0]

module.exports = {
    toCapital: toCapital,
    toOrdinal: toOrdinal,
    to12Hour: to12Hour,
    toMeridiem: toMeridiem,
    getMeridiem: getMeridiem,
    maintainDigits : maintainDigits,
    setDigits : setDigits,
    getDecimals : getDecimals,
    toWrittenNumb : toWrittenNumb,
    getIsoDate : getIsoDate,
    getIsoYear : getIsoYear,
    getIsoMonth : getIsoMonth,
    getIsoDay : getIsoDay,
    getIsoTime : getIsoTime,
    getIsoHour : getIsoHour,
    getIsoMinute : getIsoMinute,
    getIsoSecond : getIsoSecond
}
