const { verifyToken } = require("../utils/handleJWT")
const {
  handleErrors,
  handleHttpError,
} = require("../utils/handleErrors");

const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
        handleErrorResponse(res, "NOT_ALLOW", 409);
      return;
    }
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    if (tokenData._id) {
      next();
    } else {
      handleErrors (res, "NOT_ALLOW", 409);
    }
  } catch (err) {
    handleHttpError(res, err);
  }
};

module.exports = checkAuth;