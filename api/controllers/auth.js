const { handleErrors } = require("../utils/handleErrors");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const { signToken } = require("../utils/handleJWT");

const login = async (req, res) => {
  try {
    let { body } = req;
    const { password, email } = body;

    const dataUser = await usersModel.findOne({ email }, [
      '_id',
      "password",
      "role",
      "name",
      "lastname",
      "alias",
      "lastName",
    ]);
    const hash = dataUser.get("password");
    const verifyUser = await compare(password, hash);
    const token = await signToken(dataUser);
    res.send({ msg: `Login attemp: ${verifyUser}`, token });
  } catch (err) {
    handleErrors(res, (msg = "ERR_LOGIN_AUTH"));
  }
};

const register = async (req, res) => {
  try {
    let { body } = req;
    const { password } = body;
    const hash = await encrypt(password);

    body = {
      ...body,
      password: hash,
    };

    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });
    const data = {
      msg: "REGISTRATION DONE",
      dataUser,
    };

    res.send({ msg: "New user registered", data });
  } catch (err) {
    handleErrors(res, (msg = "ERR_REGISTER_AUTH"));
    console.log(err);
  }
};

const test = async (req, res) => {
  try {
    res.send({ msg: "Test working" });
  } catch (err) {
    handleErrors(res, (msg = "ERR_REGISTER_AUTH"));
    console.log(err);
  }
};

module.exports = { login, register, test };
