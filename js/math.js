////
////////        Mathmatical Functions
////////////////////////////////////////////////
////

function add( a, b ){
  return a + b;
}

function subtract( a, b ){
  return a - b;
}

function multiply( a, b ){
  return a * b;
}

function divide( a, b ){
  return a / b;
}

function sum( numberCollection ){
  let sumTotal = 0;

  for( let a = 0; a <= numberCollection.length; a++ ){
    sumTotal += numberCollection[a];
  }

  return sumTotal;
}

function sumOf( numberCollection ){
  sum( numberCollection );
}

function product( numberCollection ){
  let productTotal = 1; // Using 1 sets to first index with *= operator.

  for( let a = 0; a <= numberCollection.length; a++ ){
    productTotal *= numberCollection[a];
  }

  return productTotal;
}

function productOf( numberCollection ){
  product( numberCollection );
}

function gatherrange( a, b ){
  var c = [];
  while( a <= b ){
    c.push(a);
    a++;
  }
  return c;
}