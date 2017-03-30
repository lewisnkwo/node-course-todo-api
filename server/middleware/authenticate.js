let {User} = require('./../models/user');
let authenticate = (req, res, next) => {

  let token = req.header('x-auth');

  User.findbyToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    res.user = user;
    res.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });

}

module.exports = {authenticate};
