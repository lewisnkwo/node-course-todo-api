var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo:', doc);
// }, (e) => {
//   console.log('Unable to save todo.');
// });
//
// var newTodo = new Todo({
//   text: '  edit this video   '
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo:', doc);
// }, (e) => {
//   console.log('Could not save todo:', e);
// });
