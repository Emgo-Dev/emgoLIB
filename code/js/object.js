/*
  isObject("Hi") -> false
  isObject(1) -> false
  isObject(true) -> false
  isObject(false) -> false
  isObject([]) -> false
  isObject({}) -> true
*/
function isObject( col ){
  if( typeof col !== "object" ) return false;
  if( col.__proto__.constructor.name !== "Object" ) return false;

  return true;
}

const countProperties = obj => Object.keys(obj).length;

function objFilter( obj, properties ){
  let filtered = {}
  for( let prop in arguments ){
    if( prop > 0 ){
      filtered[arguments[prop]] = obj[arguments[prop]];
    }
  }
  return filtered;
}
