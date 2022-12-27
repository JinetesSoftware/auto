const bc = require("bcryptjs");
const { handleErrors } = require("./handleErrors");

const encrypt = async (passwordPlain) => {
  const hash = await bc.hashSync(passwordPlain, 10);
  return hash;
};

const compare = async (passwordPlain, hash) => {
  try{

    const isMatch = bc.compareSync(passwordPlain, hash)
    return isMatch

  }catch(err){
    handleErrors({}, msg="ERROR_PASSWORD_HASH");
  }

};

module.exports = { encrypt, compare };