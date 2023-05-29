const { Validator } = require("node-input-validator");

const Uni = {
  name: "required|string",
  faculty: "required|string",
  address: "required|string",
};

const UniPartial = {
  name: "string",
  faculty: "string",
  address: "string",
};

const validate = async (data, schema) => {
  let v = new Validator(data, schema);
  let e = await v.check();
  if (!e) {
    throw v.errors;
  }
};

module.exports = {
  Uni,
  UniPartial,
  validate,
};
