/*
  isArray("Hi") -> false
  isArray(1) -> false
  isArray(true) -> false
  isArray(false) -> false
  isArray({}) -> false
  isArray([]) -> true
*/
function isArray( col ){
  if( typeof col !== "object" ) return false;
  if( col.__proto__.constructor.name !== "Array" ) return false;

  return true;
}

/*
  ARRAY FOR TESTING AND DEVELOPMENT
  [
    1,
    2,
    3,
    [
      4,
      5,
      6,
      [
        "end of array"
      ]
    ],
    {
      "0": "Mike",
      "1": "G",
      "a": "A",
      "b": {
        "0": "Test",
        "a": "a",
        "b": {
          "0": "fail",
          "test": "failure"
        }
      }
    }
  ]

  sift([ 1, 2, 3 ]) -> [1, 2, 3]
  sift([ 1, [2, 3] ]) -> [ 1, [2, 3] ]
  sift([ 1, [ 2, [3, 4, 5] ] ]) -> [ 1, [ 2, [3, 4, 5] ] ]
  sift([ 1, [ 2, {0: 3, a: 4, b: 5, 1: 6} ] ]) -> [ 1, [ 2, [3, 6, 4, 5] ] ]
  sift({ 0: 0, 1: 1, 2: 2 }) -> [0, 1, 2]
  sift({ a: 0, 0: 1, x: 2 }) -> [1, 0, 2]
  sift({ a: 0, 5: 1, x: 2 }) -x [0, 2]
*/
function sift( col = [], sifted = [], i = -1 ){
  i = i + 1;
  if( !["Array", "Object"].includes(col["__proto__"]["constructor"]["name"]) ){ throw TypeError(`sift() requires first parameter to be a type of collection (Array, Array-like, or Object). The constructor of given data was ${col["__proto__"]["constructor"]["name"]} and data type is ${typeof col}`); }
  let numInEnd = [undefined].includes(col[i]), colIsObj = ["Object"].includes(col["__proto__"]["constructor"]["name"]);
  let isPropObj = ( obj, prop ) => ["Object"].includes(obj[prop]["__proto__"]["constructor"]["name"]);
  let isPropVendor = ( obj, prop ) => isNaN(prop) && [undefined].includes(obj["__proto__"][prop]) ? true : false;

  if( numInEnd ){
    if( colIsObj ){
      for( let p in col ) if( isPropVendor(col, p) ) if( isPropObj(col, p) ) sifted[sifted.length] = sift(col[p]); else sifted[sifted.length] = col[p];
    }

    return sifted;
  }

  if( ["Array", "Object"].includes(col[i]["__proto__"]["constructor"]["name"]) ) return sift( col, [...sifted, sift(col[i])], i);
  return sift( col, [...sifted, col[i]], i );
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

function diffArray( arr1, arr2 ){
  let test = [];
  let found = false;
  for( let a = 0; a < arr1.length; a++ ){
    for( let b = 0; b < arr2.length; b++ ){
      if( arr1[a] === arr2[b] ){
        b = arr2.length - 1;
        found = true;
      }
    }

    if( !found ) test[test.length] = arr1[a];

    found = false;
  }

  for( let a = 0; a < arr2.length; a++ ){
    for( let b = 0; b < arr1.length; b++ ){
      if( arr2[a] === arr1[b] ){
        b = arr1.length - 1;
        found = true;
      }
    }

    if( !found ) test[test.length] = arr2[a];

    found = false;
  }

  return test;
}
