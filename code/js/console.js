function log(){ for( let arg in arguments ) console.log(arguments[arg]); }
function logTable(){ for( let arg in arguments ) console.table(arguments[arg]); }
function logTime(){ for( let arg in arguments ){ console.time(arguments[arg]); }
function logTimeEnd(){ for( let arg in arguments ) console.timeEnd(arguments[arg]); }
function logError( str ){ throw Error(str); }
function logTypeError( str ){ throw TypeError(str); }

module.exports = {
  log: log
}
