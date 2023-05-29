const { Validator } = require("node-input-validator");

const Faculty = {
  name: "required|string",
  uni: "required|string",
  address: "required|string",
};

const FacultyPartial = {
  name: "string",
  uni: "string",
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
Faculty,
FacultyPartial,
  validate,
};
