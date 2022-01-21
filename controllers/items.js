const db = require("../models");


const index = (req, res, next) => {
    db.Item.find({}, (err, allItems) => {
        if (err) return res.send(err);
        const context = { items: allItems, user: req.user };
        return res.render("items/index", context);
    });
};

// newItem

const newItem = (req, res,) => {
	const context = { user: req.user };
	return res.render("items/new", context);
};

// show

const show = (req, res) => {
	console.log("ItemsController>Show>Param:" + req.params.id);
	db.Item.findById(req.params.id)
		.populate("user")
		.exec((err, foundItem)=> {
			if(err) return res.send(err);
			console.log(foundItem);
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
	console.log("ItemsController>destroy>" + req.params.id)
	db.Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
		if (err) return res.send(err);
		res.redirect("/users")
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
