const { handleErrors } = require("../utils/handleErrors");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const { signToken } = require("../utils/handleJWT");

const login = async (req, res) => {
  try {
    let { body } = req;
    const { password, email } = body;

    const dataUser = await usersModel.findOne({ email }).select("password");
    const hash = dataUser.get("password");
    const verifyUser = await compare(password, hash);
    const token = await signToken(dataUser);

    res.send({ msg: verifyUser, dataUser, token });
  } catch (err) {
    handleErrors(res, (msg = "ERR_LOGIN_AUTH"));
  }
};

const register = async (req, res) => {
  try {
    let   { body } = req;
    const { tenant } = req
    const { password } = body;
    const hash = await encrypt(password);

    body = {
      ...body,
      password: hash,
      tenant: tenant || null
    };

    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    const data = {
      msg: "REGISTRATION DONE",
      dataUser
    };

    res.send({ msg: "New user registered", data });
  } catch (err) {
    handleErrors(res, (msg = "ERR_REGISTER_AUTH"));
    console.log(err);
  }
};

const check = (req, res) => {
  try {
    const {tenant} = req
    console.log(tenant)
    if(tenant === null ){ 
      res.send({tenant});
    }
    res.send({tenant});
  } catch (error) {
    handleErrors(res, (msg = "ERR_CHECK_tenant"));
  }
};

module.exports = { login, register, check };