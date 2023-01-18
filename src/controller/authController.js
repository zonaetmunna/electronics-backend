const Auth = require('../model/AuthModel');
const createResponse = require('../utils/responseGenerate');
const jwt = require('../lib/jwt');

// signup
const signup = async (req, res, next) => {
  try {
    const body = { name: req.body.name, email: req.body.email, phone: req.body.phone, password: req.body.password };
    const user = new Auth(body);
    await user.save();
    return res.json(createResponse(user, 'Registration successfully', false));
    
  } catch (error) {
    next(error);
  }
};

// login
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error('No user with this email!');
    }
    const isValidPassword = await User.findOne({password: req.body.password});
    if (!isValidPassword) {
      throw new Error('Incorrect email or password!');
    }

    const token = jwt.issueJWT(user);
    return res.json(createResponse({
      name: user.name,
      email: user.email,
      id: user._id,
      profileImage: user.profileImage,
      phone: user.profileImage,
      role: user.role,
      status: user.status,
      token
    }, 'Login successful!', false));

  } catch (err) {
    next(err);
  }
};

// authuser
const authUser = async (req, res, next) => {
	try{
		return res.json(createResponse(req.user));
	}
	catch(err) {
		next(err);
	}
};


module.exports = {
  signup,
  login,
  authUser,

};