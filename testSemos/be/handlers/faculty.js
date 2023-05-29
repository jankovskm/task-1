const {
    addFaculty,
    removeFaculty,
    updateFaculty,
    getAllFacultys,
    getOneFaculty,
  } = require("../pkg/faculty/mongo");
  
  const {Faculty, FacultyPartial, validate} = require ("../pkg/faculty/validate")
  
  const create = async (req, res) => {
    try {
      await validate(req.body, Faculty);
      console.log(req.body);
      await addFaculty(req.body);
      return res.status(201).send(req.body);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  const update = async (req, res) => {
    try {
      await validate(req.body, FacultyPartial);
      console.log(req.params.id);
      console.log(req.body);
      await updateFaculty(req.params.id, req.body);
      return res.status(204).send("");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  const remove = async (req, res) => {
    try {
      await removeFaculty(req.params.id);
      return res.status(204).send("");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  const getAll = async (req, res) => {
    try {
      const facultys = await getAllFacultys();
      return res.status(200).send(facultys);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  const getOne = async (req, res) => {
    try {
      const facultys = await getOneFaculty(req.params.id);
      return res.status(200).send(facultys);
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
  