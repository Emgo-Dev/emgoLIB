# Mongoose

A NodeJS library for MongoDB. Provides classes for defining schematics and models. Schematics allow defining a structure and format for data of a collection. Models allow the creation of a representational instance of a collection by which methods are performed.

To get started fetch the library package with the NodeJS `require()` and store it in a global identifier.

```js
const mongoose = require("mongoose");
```

## Connection

Create a connection to MongoDB with the `mongoose.connect()` method. The parameters accepts a standard MongoDB URI format string.

> https://docs.mongodb.com/manual/reference/connection-string/

> "... the standard format of the MongoDB connection URI used to connect to a MongoDB database server. The format is the same for all official MongoDB drivers. ..." -

> The following is the standard URI connection scheme:

> ```
mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
```

The following example uses the minimum URI format necessary to create a connection. Replace `host` with your domain, I.P. address, or `localhost` if you're running on a computer and dbName with the database you want to use.

```js
mongoose.connect("mongodb://host/dbName");
```

Share global promise with mongoose.

```js
mongoose.Promise = global.Promise;
```

Now store the connection instance in a `db` global providing better context for interacting with our database. Bind an error event handler to the connection instance to report any problems with connecting.

```js
const db = mongoose.connection;
db.on(
  'error',
  function(){
    console.error.bind(console, 'MongoDB connection error:');
  }
);
```

All together this is what your connection block should look like. Place it after your express global but before your routes.

```js
const mongoose = require('mongoose'); // REQUIRE MONGOOSE MODULE
mongoose.connect('mongodb://host/dbName'); // CREATE CONNECTION
mongoose.Promise = global.Promise; // SHARE GLOBAL.PROMISE WITH MONGOOSE
const db = mongoose.connection; // STORE DEFAULT CONNECTION
db.on( // BIND CONNECTION TO ERR EVENT
  'error',
  function(){
    console.error.bind(console, 'MongoDB connection error:');
  }
);
```

## Collection Model & Schema

A Mongoose model is an instanced representation of a MongoDB database collection. Through the model we make our interactions with the collection.

A Mongoose schema is an object representation of the data structure desired to enforce for a MongoDB database collection. Through the collection we declare field/property data types, required field/properties, and many more validation provided by Mongoose.

### Schema

Create a Mongoose schema by extracting the `mongoose.Schema` class/object from the parent mongoose class. Then create a schema instance with the collection structure. It is a good practice to name the schema instance as `CollectionSchema`, collection being the name of the collection in the database this schema is for.

```js
var Schema = mongoose.Schema; // STORE MONGOOSE SCHEMA CLASS
var CollectionSchema = new Schema({ // INSTANTIATE NEW SCHEMA
  id: Number,
  text: { type: String, required: true }
});
```

### Model

Create a Mongoose model with `mongoose.model()` with the first parameter being the collection name followed by the schema instance above. Store the model instance in a global.

```js
let Collection = mongoose.model("collection", CollectionSchema);
```

You can include this entire Schema & Model block in separate files from your controller. Another good practice is to store models under a `model/` directory. You can export the model instance using NodeJS `module.exports` directly.

```js
module.exports = mongoose.model("collection", CollectionSchema);
```

Remember to maintain the model naming practice above by storing the result of your NodeJS require in your controller as the Collection name the model represents.

```js
const Collection = require("./models/collection");
```

## Instance Methods

Using `mongoose.model()` instantiates our model from the schema. This model behaves like a class for that model from which we can instantiate an instance of that model to use methods on that collection.

Store an instance of that model object in an instance identifier where your router is performing some action.

```js
let instance = new Collection();
```

This model constructor can accept a collection of parameters very similar to how the MongoDB collection methods behave. When performing methods with a data object (such as inserting, finding, or removing), store the data object in an identifier and pass that into the constructor.

```js
let data = { id: 1, text: "Hello World!" }
let instance = new Collection(data);
```

#### Insert

Insert this data into the collection using the `new mongoose.model().save()` method, or in this case the `instance.save()`. All together this code block should look like this.

```js
let data = { id: 1, text: "Hello World!" }
let instance = new Collection(data);
instance.save();
```

#### Find

Insert this data into the collection using the `mongoose.model().find()` method, or in this case the `Collection.find()`. The model still behaves as a representation of a collection and colleciton methods are still available. In this case we don't need to create an instance of the model. You could say then that calling a model constructor of your collection binds your data object to your schema for preparation of insertion/removal/updating.

All together this code block should look like this.

```js
Notes.find({ text: "Hello Again" }, function(err, doc){
  console.log(doc);
})
```

You can filter the fields retrieved by passing them as the second argument. If only one field is desired, the parameter can be a string (eg: `"text"`), otherwise it should be an object of fields as properties like the first parameter. Set the value of the properties to `1` (eg: `{ text: 1 }`).

```js
Notes.find({ text: "Hello Again" }, { text: 1 }, function(err, doc){
  console.log(doc);
})
```
