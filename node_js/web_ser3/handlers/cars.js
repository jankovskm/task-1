const {
    addCar,
    removeCar,
    updateCar,
    getAllCars, 
    getCarByIndex
} = require("../pkg/files/cars");


const getAll = async(req, res) => {
    try {
        const cars = await getAllCars();

        return res.status(200).send(cars);
    } catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const getOne = async (req, res) => {
    try {
        const car = await getCarByIndex(Number(req.params.id));
        return res.status(200).send(car);
    } catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const create = async (req, res) => {
    try {
        // {"manufacturer": "BMW","model":"5","year": 2018}
        await addCar(req.body);
        return res.status(201).send(req.body);
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
}

const update = async (req, res) => {
    try {
        await updateCar(Number(req.params.id), req.body);
        return res.status(204).send("");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
}

const remove = async (req, res) => {
    try {
        await removeCar(Number(req.params.id));
        return res.status(204).send("");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update, 
    remove}