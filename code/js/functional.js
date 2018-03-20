////
////////        Functional Functions
////////////////////////////////////////////////
////

/**
 * Call function periodically
 * @param   {function}  func  Contained code to run.
 * @param   {integer}   time  Delay between execution in milisecond
 * @return  {integer}         Interval ID. Cancel execution with window.clearInterval(return)
 */
const interval = ( func, time ) => window.setInterval( func, time );

/**
 * Call function after specified time
 * @param    {function}  func  The code to run
 * @param    {integer}   time  Delay between executing @func in miliseconds
 * @return   {integer}         The ID for the time. Cancel time with window.clearTimeout(@return)
 */
const delay = ( func, time ) => window.setTimeout( func, time );