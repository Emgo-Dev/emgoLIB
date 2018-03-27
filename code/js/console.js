function log( parameters ){ for( let arg in arguments ) console.log(arguments[arg]); }
function logTable( parameters ){ for( let arg in arguments ) console.table(arguments[arg]); }
function logError( str ){ throw Error(str); }
function logTypeError( str ){ throw TypeError(str); }

module.exports = {
  log: log
}
