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
Object.prototype.toArray = function(){ return Object.entries(this); }
Object.prototype.length = function(){ return Object.keys(this).length; }
