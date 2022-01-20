const db = require("../models");

const index = (req, res, next) => {
        const context = { user: req.user };
        return res.render("/", context);
};

module.exports = {
    index
}