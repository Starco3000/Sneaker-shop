//CLI: npm install jsonwebtoken --save
const jwt = require('jsonwebtoken');
const MyConstants = require('./MyConstants');
const JwtUtil = {
  genToken(username, password) {
    const token = jwt.sign(
      { username: username, password: password },
      MyConstants.jwt_secret,
      { expiresIn: MyConstants.jwt_expires }
    );
    return token;
  },
  checkToken(req, res, next) {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token) {
      jwt.verify(token, MyConstants.jwt_secret, (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
  }
};
module.exports = JwtUtil;