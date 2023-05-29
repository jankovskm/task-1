const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        minLength: 2,
    },
    uni: [mongoose.SchemaTypes.ObjectId],
    address: {
        type: String,
        // required: false,
    },
    // owner: [mongoose.SchemaTypes.ObjectId],
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }
})

const Faculty = mongoose.model("facultys", FacultySchema);

const addFaculty = async(faculty) => {
    try {
        const newFaculty = new Faculty(faculty);
    return await newFaculty.save();
    } catch (error) {
        throw error;
    }
}

const removeFaculty = async (id) => {
    return await Faculty.deleteOne({ _id: id });
  };
  

const updateFaculty = async (id, faculty) => {
    return await Faculty.updateOne({ _id: id}, faculty );
};
  
const getAllFacultys = async () => {
return await Faculty.find({});
};
  
const getOneFaculty = async (id) => {
return await Faculty.findOne({ _id: id });
};

module.exports = {
    addFaculty,
    removeFaculty,
    updateFaculty,
    getAllFacultys,
    getOneFaculty,
  };