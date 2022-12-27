const { verifyToken } = require("../utils/handleJWT");
const { usersModel } = require("../models");
const { handleErrors, handleHttpError } = require("../utils/handleErrors");

const checkRoleAuth = (roles) => async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleErrors(res, "NOT_ALLOW", 409);
      return;
    }
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    const {_id} = tokenData
    const userData = await usersModel.findById(_id);
    const checkRoles = roles.some((rol)=> userData.role.includes(rol));

    if (checkRoles) {
      next();
    } else {
      handleErrors(res, "NOT_ALLOW_ROLE", 409);
    }
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = checkRoleAuth;