const db = require("../models");


const index = (req, res) => {
    db.Item.find({}, function (err, allItems) {
        if (err) return res.send(err);
        const context = { items: allItems };
        return res.render("items/index", context);
    });
};


const create = (req, res) => {
	db.Item.create(req.body, function (err, foundItem) {
		if (err) return res.send(err);

		return res.redirect("/items");
	});
};


module.exports = {
    index,
    create,
    
}
