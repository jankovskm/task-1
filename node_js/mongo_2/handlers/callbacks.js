const blogpost = require("../models/blogpost");


const create = async (req, res) => {
    try {
        let data = {
            ...req.body, //cel body kje go zeme
            publish_date: new Date().toISOString()
        };
        await blogpost.create(data);
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}

module.exports = {
    create
}