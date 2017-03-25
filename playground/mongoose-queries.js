const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '58d2706b14d04c04cfdd2318';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// };
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(`Todos: ${todos}`);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(`Todo: ${todo}`);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log(`Todo By Id: ${todo}`);
// }).catch((error) => console.log('Could not find by ID:', error));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found.');
  }

  console.log('User found:', user);
}, (e) => {
  console.log('Could not find user by ID:', e);
});
