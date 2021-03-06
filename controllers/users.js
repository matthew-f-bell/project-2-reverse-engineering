const db = require("../models");

const index = (req, res, next) => {
    db.Item.find({}, (err, allItems) => {
        if (err) return res.send(err);
        const context = { items: allItems, user: req.user };
        return res.render("users/index", context);
    });


    db.Job.find({}, (err, allJobs) => {
        if (err) return res.send(err);
        const context = { jobs: allJobs, user: req.user };
        return res.render("users/index", context);
    });
};



module.exports = {
    index,
}