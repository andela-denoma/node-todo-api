const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5947bc7f8dfe7f45fbcab926'}).then((result) => {
//
// });

Todo.findByIdAndRemove('5947bc7f8dfe7f45fbcab926').then((todo) => {
  console.log(todo);
});
