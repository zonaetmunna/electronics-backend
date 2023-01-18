const { roles } = require("./roles");

exports.grantAccess = function (action, resource) {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({
          success: false,
          msg: "you dont have enough permission to perform this action",
        });
      }
      next();
      
    } catch (error) {
      next(error);
    }
  };
};