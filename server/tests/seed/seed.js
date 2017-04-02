const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
  {
    _id: userOneId,
    email: 'lewis@example.com',
    password: 'userOne',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth'}, 'abc123').toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: 'john@xample.com',
    password: 'userTwo'
  }
];

const todos = [
  {
    _id: new ObjectID(),
    text: '1st test todo'
  },
  {
    _id: new ObjectID(),
    text: '2nd test todo',
    completed: true,
    completedAt: 123
  }
];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]).then(() => done());

  });

};

module.exports = {todos, populateTodos, users, populateUsers};
