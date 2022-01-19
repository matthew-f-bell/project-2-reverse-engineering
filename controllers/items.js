const db = require("../models");


const index = (req, res) => {
    db.Items.find({}, function (err, allItems) {
        if (err) return res.send(err);
        const context = { items: allItems };
        return res.render("items/index", context);
    });
};


module.exports = {
    index,
    
}
