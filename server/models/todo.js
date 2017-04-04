let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
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
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  }
});

module.exports = {Todo};

// let newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo:', doc);
// }, (e) => {
//   console.log('Unable to save todo.');
// });
//
// let newTodo = new Todo({
//   text: '  edit this video   '
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo:', doc);
// }, (e) => {
//   console.log('Could not save todo:', e);
// });
