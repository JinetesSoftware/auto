const { clientModel } = require("../models");
const { handleErrors } = require("../utils/handleErrors");

const getclients = async (req, res) => {
  try {
    const clients = await clientModel.find({});
    res.send({ clients });
  } catch (e) {
    handleErrors(res, (msg = `ERROR_GET_CLIENTS: ${e}`));
  }
};

const getclient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientModel.findOneAndPopulate(id);
    res.send({ client: client[0] });
  } catch (e) {
    handleErrors(res, (msg = `ERROR_GET_CLIENT: ${e}`));
  }
};

const createclient = async (req, res) => {
  try {
    const { tenant } = req;
    const { body } = req;
    body = {
      ...body,
      tenant,
    };
    const newclient = await clientModel.create(body);

    res.send({
      msg: "Client created",
      newclient,
    });
  } catch (e) {
    handleErrors(res, (msg = `ERROR_CREATE_CLIENT: ${e}`));
  }
};

const desactivateclient = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await clientModel.findByIdAndUpdate(id, {
      status: false,
    });
    if (!updated.status) {
      handleErrors(res, (msg = `ERROR_CLIENT_ALREADY_DESACTIVATED: ${e}`));
      return;
    }
    res.send({
      msg: `${id} desactivated successfully`,
    });
  } catch (e) {
    handleErrors(res, (msg = `ERROR_DESACTIVATE_CLIENT: ${e}`));
  }
};

const updateclient = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    await clientModel.findByIdAndUpdate(id, body);
    const updated = await clientModel.findOne({ id });

    res.send({ msg: `${id} updated successfully`, updated: updated.status });
  } catch (err) {
    handleErrors(res, (msg = "ERROR_UPDATED_CLIENT"));
    console.log(err);
  }
};

module.exports = {
  getclients,
  getclient,
  createclient,
  desactivateclient,
  updateclient,
};
