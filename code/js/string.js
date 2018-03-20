let toCapital = ( str, lowAll = 0 ) => {
    if( typeof str !== "string" ){ throw TypeError(`toCapital() requires first parameter to be a string. The data type of given value was ${typeof str}`); }
    if( typeof lowAll !== "number" ){ throw TypeError(`toCapital() requires second parameter to be a number. Default (0) ignores case of rest of string, on (1) de-capitalizes rest of string.`); }

    return str.slice(0, 1).toUpperCase().concat( (lowAll ? str.slice(1).toLowerCase() : str.slice(1)) );
}

let toOrdinal = int => {
    if( !["string", "number"].includes(typeof int) ){ throw TypeError(`toOrdinal() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); }
    let digits = [(parseInt(int)%10), (parseInt(int)%100)];
    let pattern = [[1, 2, 3, 4], ["st", "nd", "rd", "th"]];

    return pattern[0].includes(digits[0]) && (digits[1] < 11 || digits[1] > 13) ? int + pattern[1][digits[0]-1] : int + pattern[1][3];
}

let to12Hour = int => {
    if( !["string", "number"].includes(typeof int) ){ throw TypeError(`to12Hour() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); }
    if( isNaN(parseInt(int)) ){ throw TypeError(`to12Hour() requires first parameter to contain a usable number. The data of given value was ${int} and is Not-A-Number (NAN)}`); }
    let num = parseInt(int);

    return [0, 12, 24].includes(num) ? 12 : num % 12;
}

let toMeridiem = int => {
    if( !["string", "number"].includes(typeof int) ){ throw TypeError(`toMeridiem() requires first parameter to be a string or number. The data type of given value was ${typeof int}.`); }
    if( isNaN(parseInt(int)) ){ throw TypeError(`toMeridiem() requires first parameter to contain a usable number. The data of given value was ${int} and is Not-A-Number (NAN)}`); }
    let med = int < 24 ? int > 11 ? "pm" : "am" : "am";
    let num = parseInt(int);

    return [0, 12, 24].includes(num) ? `12${med}` : `${num % 12}${med}`;
}

let getMeridiem = str => str.slice( str.search( ["am","pm"].filter( r => str.includes(r) )[0] ) );

/**
 * Affix "0" X times to integer
 * Maintain the digit length of an integer.
 * @param   {integer}  int  The integer to remain unchanged
 * @param   {integer}  len  The digit length to maintain
 * @param   {integer}  dir  Side of integer to maintain digit length
 * @return  {string}        Example: "1" -> "01" / "10".
 */
let maintainDigits = ( str = 0, len = 1, x = 0 ) => [str.padStart(len, "0"), str.padEnd(len, "0")][x > 0 ? 1 : 0];
let setDigits = ( str = 0, len = 1, x = 0 ) => [str.padStart(str.length + len, "0"), str.padEnd(str.length + len, "0")][x > 0 ? 1 : 0];

let getDecimals = str => {
    if( !["string", "number"].includes(typeof str) ){ throw TypeError(`toWrittenNumb() requires first parameter to be a string or number. The data type of given value was ${typeof str}.`); }
    if( typeof str == "number"){ str = String(str % 1).slice(2); }
    
    return str.slice(str.search("\\.") + 1);
}

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