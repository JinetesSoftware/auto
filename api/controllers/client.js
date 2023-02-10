const { clientModel } = require("../models");
const { handleErrors } = require("../utils/handleErrors");

const getClients = async (req, res) => {
  try {
    const clients = await clientModel.find({ status: true },{docs:0, works:0});
    res.send({ clients });
  } catch (e) {
    handleErrors(res, (msg = `ERROR_GET_CLIENTS: ${e}`));
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientModel.findById(id);
    res.send({ client });
  } catch (e) {
    handleErrors(res, (msg = `ERROR_GET_CLIENT: ${e}`));
  }
};

const createClient = async (req, res) => {
  console.log("BODY", req.body);
  try {
    const { body } = req;
    const newclient = await clientModel.create(body);

    res.send({
      msg: "Client created",
      newclient,
    });
  } catch (e) {
    handleErrors(res, (msg = `ERROR_CREATE_CLIENT: ${e}`));
  }
};

const desactivateClient = async (req, res) => {
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


const activateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await clientModel.findByIdAndUpdate(id, {
      status: true,
    });
    if (updated.status) {
      handleErrors(res, (msg = `ERROR_CLIENT_ALREADY_ACTIVATED: ${e}`));
      return;
    }
    res.send({
      msg: `${id} activated successfully`,
    });
  } catch (e) {
    handleErrors(res, (msg = `ERROR_ACTIVATE_CLIENT: ${e}`));
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
console.log(body);
    console.log(body)
    await clientModel.findByIdAndUpdate(id, body);
    const client = await clientModel.findById(id);
    res.send({ msg: `${id} updated successfully`, client });
  } catch (err) {
    handleErrors(res, (msg = "ERROR_UPDATED_CLIENT"));
    console.log(err);
  }
};

const getClientsTrash = async (req, res) => {
  try {
    const clients = await clientModel.find({ status: false });
    res.send({ clients });
  } catch (e) {
    handleErrors(res, (msg = `ERROR_GET_CLIENTS: ${e}`));
  }
};

module.exports = {
  getClients,
  getClientById,
  createClient,
  desactivateClient,
  activateClient,
  updateClient,
  getClientsTrash,
};
