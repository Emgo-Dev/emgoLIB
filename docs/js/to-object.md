# Array to Object

Returns object with `values` paired to `keys`. If no key available, defaults to numerical property.

```js
function toObject( values = [], keys = [] ){
  let loopI = 0;
  let keyI = 0;
  let obj = {};
  for( let value of values ){
      let noKey = !keys[loopI] ? true : false;
      if( noKey ){
          obj[keyI] = value;
          keyI += 1;
      }else{
          obj[keys[loopI]] = value;
      }

      loopI += 1;
  }

  return obj;
};
```
