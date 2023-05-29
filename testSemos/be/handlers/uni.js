const {
  addUni,
  removeUni,
  updateUni,
  getAllUnis,
  getOneUni,
} = require("../pkg/uni/mongo");

const {Uni, UniPartial, validate} = require ("../pkg/uni/validate")

const create = async (req, res) => {
  try {
    await validate(req.body, Uni);
    console.log(req.body);
    await addUni(req.body);
    return res.status(201).send(req.body);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const update = async (req, res) => {
  try {
    await validate(req.body, UniPartial);
    console.log(req.params.id);
    console.log(req.body);
    await updateUni(req.params.id, req.body);
    return res.status(204).send("");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const remove = async (req, res) => {
  try {
    await removeUni(req.params.id);
    return res.status(204).send("");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getAll = async (req, res) => {
  try {
    const unis = await getAllUnis();
    return res.status(200).send(unis);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getOne = async (req, res) => {
  try {
    const uni = await getOneUni(req.params.id);
    return res.status(200).send(uni);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
