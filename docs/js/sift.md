# Sift

An agnostic, recursive, deep searching function that will return an array of values where they were found. Transforms objects into arrays.

```js
function sift( col = [], sifted = [], i = -1 ){
  i = i + 1;
  if( !["Array", "Object"].includes(col["__proto__"]["constructor"]["name"]) ){
    throw TypeError(`sift() requires first parameter to be a type of collection (Array, Array-like, or Object). Instead the constructor name for given parameter was ${col["__proto__"]["constructor"]["name"]} with a data type of ${typeof col}`);
  }
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
};
```
