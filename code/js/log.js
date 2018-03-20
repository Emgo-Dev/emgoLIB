function testMultipleArgumentsWithSpreadOperator( args ){ [...arguments].map( r => console.log(r) ); }
function logMessage( arg ){ console.log(...arguments); }
function logTable( arg ){ console.table(...arguments); }
let logError = str => { throw Error(str); }
let logTypeError = str => { throw TypeError(str); }