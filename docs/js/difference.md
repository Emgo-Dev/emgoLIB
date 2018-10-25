# Array Difference

```js
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
};
```
