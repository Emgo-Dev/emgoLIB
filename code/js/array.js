function sift( arr = [], sifted = [], i = -1 ){
  i = i + 1; // INCREMENT ITERATOR
  if( typeof arr[i] === "undefined" ) return sifted;
  else return sift( arr, [...sifted, arr[i]], i );
}

/*
  toObject(["a", "b"], ["dee", "dum"]) -> { a: "dee" b: "dum" }
*/
function toObject( keys, values ){
    let keyI = 0;
    let loopI = 0;
    let obj = {};

    for( let val of values ){
        let noKey = !keys[loopI] ? true : false;
        if( noKey ){
            obj[keyI] = val;
            keyI += 1;
        }else{
            obj[keys[loopI]] = val;
    }

        loopI += 1;
  }

    return obj;
}

Array.prototype.toObject = function( keys ){
    let keyI = 0;
    let loopI = 0;
    let obj = {};
    for( val of this ){
function sift( col = [], sifted = [], i = -1 ){
  i = i + 1;
  if( !["Array", "Object"].includes(col["__proto__"]["constructor"]["name"]) ){ throw TypeError(`sift() requires first parameter to be a type of collection (Array, Array-like, or Object). The constructor of given data was ${col["__proto__"]["constructor"]["name"]} and data type is ${typeof col}`); }

  if( col[i] === undefined ){
    if( ["Object"].includes(col["__proto__"]["constructor"]["name"]) ){
      for( let p in col ){
        if( isNaN(p) && [undefined].includes(col["__proto__"][p]) ){
          if( ["Object"].includes(col[p]["__proto__"]["constructor"]["name"]) ){
            sifted[sifted.length] = sift(col[p]);
          }else{
            sifted[sifted.length] = col[p];
          }
        }
      }
    }
    return sifted;
  }else{
    if( ["Array", "Object"].includes(col[i]["__proto__"]["constructor"]["name"]) ) return sift( col, [...sifted, sift(col[i])], i);
    return sift( col, [...sifted, col[i]], i );
  }
}

/*
  toObject(["a", "b"], ["dee", "dum"]) -> { a: "dee" b: "dum" }
*/
function toObject( keys, values ){
    for( let val of values ){
        let noKey = !keys[loopI] ? true : false;
        if( noKey ){
            obj[keyI] = val;
            keyI += 1;
        }else{
            obj[keys[loopI]] = val;
        }

        loopI += 1;
    }

    return obj;
}

module.exports = {
    toObject: toObject
}
