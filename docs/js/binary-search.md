# Binary Search

```js
function binarySearch( int, arr ){
  if( int > arr[ Math.round(arr.length / 2) - 1 ] ){
    return binarySearch( int, arr.slice( arr[ Math.round(arr.length / 2) - 1 + 1 ], arr.length ) );
  };

  if( int < arr[ Math.round(arr.length / 2) - 1 ] ){
    return binarySearch( int, arr.slice( 0, arr[ Math.round(arr.length / 2) ] ) );
  };

  if( int !== arr[ Math.round(arr.length / 2) - 1] ){
    return false;
  };

  return true;
};
```
