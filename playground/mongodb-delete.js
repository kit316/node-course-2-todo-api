const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
   console.log('Connected to MongoDB server ');
   const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Join jeet kun do'}).then((result) => {
  //   console.log(result);
  // })
  //deleteOne
  // db.collection('Todos').deleteOne({text:'Join jeet kun do'}).then((result) => {
  //   console.log(result);
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // })
  // db.collection('Users').deleteMany({name:'Gopal'}).then((result) =>{
  //   console.log(result);
  // })

// db.collection('Users').findOneAndDelete({_id:new ObjectID('5a5de7a77fd5a90ae1b4d377')}).then((result) =>{
//   console.log(result);
// })

  //client.close();

});
