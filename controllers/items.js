const db = require("../models");


const index = (req, res) => {
    db.Item.find({}, function (err, allItems) {
        if (err) return res.send(err);
        const context = { items: allItems };
        return res.render("items/index", context);
    });
};

const show = (req, res) => {
	console.log(req.params.id);
	db.Item.findById(req.params.id)
		.populate("items")
		.exec((err, foundItem)=> {
			if(err) return res.send(err);
			const context = {item: foundItem};
		    return res.render("items/show", context)
	});
};

const newItem = (req, res) => {
	res.render("items/new");
};

const create = (req, res) => {
	db.Item.create(req.body, function (err, foundItem) {
		if (err) return res.send(err);

		return res.redirect("/items");
	});
};


module.exports = {
    index,
    show,
    create,
    newItem,
    
}
