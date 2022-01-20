const db = require("../models");


const index = (req, res) => {
    db.Item.find({}, (err, allItems) => {
        if (err) return res.send(err);
        const context = { items: allItems };
        return res.render("items/index", context);
    });
};

// newItem

const newItem = (req, res) => {
	res.render("items/new");
};

// show

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


// create
const create = (req, res) => {
	db.Item.create(req.body, (err, createdItem) => {
		if (err) return res.send(err);

		return res.redirect("/items");
	});
};

// Edit

const edit = (req, res) => {
	db.Item.findById(req.params.id, (err, foundItem) => {
		if (err) return res.send(err);
		const context = { item: foundItem };
	    res.render("items/edit", context);
	});
};

// Update

const update = (req, res) => {
	db.Item.findByIdAndUpdate(req.params.id,
		{
			$set: {...req.body,},
		},
		{ new: true },
		(err, updatedItem) => {
			if (err) return res.send(err);
			res.redirect(`/items/${updatedItem._id}`);
		}
	);
};

// delete

const destroy = (req, res) => {
	db.Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
		if (err) return res.send(err);
		db.Item.findById(deletedItem, (err, foundItem) => {
            foundItem.remove(deletedItem);
            foundItem.save();
            res.redirect("/items")
        })
	});
};



module.exports = {
    index,
	newItem,
    show,
    create,
	edit,
	update,
	destroy,
    
}
