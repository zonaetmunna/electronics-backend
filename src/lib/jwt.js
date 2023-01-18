const jsonwebtoken = require('jsonwebtoken');


const issueJWT = (user, expiresTime) => {
  const _id = user._id;

  const filteredUserData = {
    role: user.role,
    _id: _id,
    status: user.status,
    email: user.email
  };

  const payload = {
    ...filteredUserData,
    sub: _id,
    iat: new Date().getTime() / 1000,
  };

  const signedToken = jsonwebtoken.sign(payload, 'thesecret', { algorithm: 'HS256' });

  return 'Bearer' + signedToken;

};


const verifyJWT = async (accessToken) => {
	try {
		const { sub, exp, role } = await jsonwebtoken.verify(accessToken, 'thesecret');
		return {
			sub: sub,
			exp: exp,
			role: role,
		};
	} 
	catch (err) {
		return false;
	}
};


module.exports.issueJWT = issueJWT;
module.exports.verifyJWT = verifyJWT;
