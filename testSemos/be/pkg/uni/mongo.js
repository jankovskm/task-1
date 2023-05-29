const mongoose = require("mongoose");

const UniSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        minLength: 2,
    },
    faculty: {
        type: String,
        //[mongoose.SchemaTypes.ObjectId]
    },
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

const Uni = mongoose.model("unis", UniSchema);

const addUni = async(uni) => {
    try {
        const newUni = new Uni(uni);
    return await newUni.save();
    } catch (error) {
        throw error;
    }
}

const removeUni = async (id) => {
    return await Uni.deleteOne({ _id: id });
  };
  

const updateUni = async (id, uni) => {
    return await Uni.updateOne({ _id: id}, uni );
};
  
const getAllUnis = async () => {
return await Uni.find({});
};
  
const getOneUni = async (id) => {
return await Uni.findOne({ _id: id });
};

module.exports = {
    addUni,
    removeUni,
    updateUni,
    getAllUnis,
    getOneUni,
  };