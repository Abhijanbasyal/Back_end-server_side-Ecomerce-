const jwt = require('jsonwebtoken');
const { createError } = require('./error');

const verifyUserToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(createError(401, 'Unauthorized'));

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return next(createError(403, 'Forbidden! token not valid'));

    req.user = user;
    next();
  });
};

module.exports = { verifyUserToken };
