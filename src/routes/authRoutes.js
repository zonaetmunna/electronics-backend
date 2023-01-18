const { signup, login, authUser } = require('../controller/authController');
const errorsHandler = require('../middleware/errorsHandler');
const passport = require('passport');
const accessControl = require('../accessController');
const router = require('express').Router();

router.post('/signup', signup, errorsHandler);
router.post('/login', login, errorsHandler);
router.get('/auth-user',
  passport.authenticate('jwt', { session: false }),
  accessControl.grantAccess('readOwn', 'profile'),
  authUser
);

module.exports = router;