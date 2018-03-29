# Mongoose

## Connection

```js
const mongoose = require('mongoose'); // REQUIRE MONGOOSE MODULE
mongoose.connect('mongodb://localhost/express'); // CREATE CONNECTION
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

```js
var Schema = mongoose.Schema; // STORE MONGOOSE COLLECTION SCHEMA CLASS
var NotesSchema = new Schema({ // DEFINE NEW COLLLECTION SCHEMA
  text: String
});
let Notes = mongoose.model("Notes", NotesSchema);
```

## Insert()

```js
let data = { id: 0, text: "someText" }
let instance = new Notes(data);
instance.save();
```

## Find()

```js
Notes.find().then(function(doc){ console.log(doc); });
Notes.find({ text: "Hello Again" }, function(err, doc){
  console.log(doc);
})
Notes.find({ text: "Hello Again" }, "text", function(err, doc){
  console.log(doc);
})
```
