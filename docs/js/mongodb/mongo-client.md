# MongoDB

## Requires & Variables
```js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'express';
```

## Connection

```js
MongoClient.connect(url, function(err, client) {
  // Some Code...
});
```

## Collection

```js
MongoClient.connect(url, function(err, client) {
  const col = client.db(dbName).collection('notes');
});
```

## Collection.find()

```js
MongoClient.connect(url, function(err, client) {
  const col = client.db(dbName).collection('notes');

  col.find({}).toArray(function(err, items) {
    console.log(items);
    client.close();
  });
});
```

## Extra

```js
MongoClient.connect(url, function(err, client) {
 const adminDb = client.db(dbName).admin();

 adminDb.listDatabases(function(err, dbs) {
   test.equal(null, err);
   test.ok(dbs.databases.length > 0);
   client.close();
 });
});
```
