// const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MondoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').deleteMany({text: 'Test'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Test'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name:'Debby'})

  db.collection('Users').findOneAndDelete({_id: new ObjectID("58ef649cb03890362ca2093a")}).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });


  // db.close();
});
