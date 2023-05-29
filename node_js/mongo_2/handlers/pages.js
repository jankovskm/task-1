const blogpost = require("../models/blogpost");

const main = async (req, res) => {
    try {
        let data = await blogpost.getAll();
        return res.render("main", {data});

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

const singleBlogpost = (req, res) => {
    try {
        let data = blogpost.getOne(req.params.id);
        return res.render("single_blogpost", {data});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

const formAdd = (req, res) => {
    return res.render("form_add");
}

module.exports = {
    main,
    singleBlogpost,
    formAdd
}