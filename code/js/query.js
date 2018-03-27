function getQueryString( queries = {} ){
  let str = Object.entries(queries);

  if( str.length > 0 ) return "?" + str.map( q => `${q[0]}=${q[1]}`).join("&");
  else return "";
}

function getQueryStringNative( queries = {} ){
  let str = [];
  for( let query in queries ){
    str[str.length] = `${query}=${queries[query]}`;
  }

  if( str.length > 0 ) return "?" + str.join("&");
  else return "";
}

function removeQueryFromString( args, path ){
  if( typeof args === "undefined" ){ args = {}; }
  if( typeof path === "undefined" ){ path = ""; }
  // REMOVES PROPERTIES OF args AND THEIR VALUES FROM QUERY STRING OF path.
  let queryCount = path.split("&").length; // GET THE # OF ASSIGNED QUERIES
  if( queryCount.length < 1 && queryCount[0].length < 3 ){ return ""; } // EMPTY PATH
  for( let property in args ){
    if( queryCount === 1 && path.includes(property) ){
      // IF SINGLE QUERY WITH MATCH
      return "";
    }else{
      // IF MULTIPLE QUERIES
      let queries = path.split("&");
      let filteredQ = queries.filter( q => !q.includes(property) );
      return "?" + filteredQ.join("&");
    }
  }

  return path;
}
