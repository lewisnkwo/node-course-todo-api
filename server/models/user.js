var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {User};

// var newUser = new User({
//   email: '  lewisnkwo@live.co.uk'
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved user:', JSON.stringify(doc));
// }, (e) => {
//   console.log('Could not save new user:', e);
// });