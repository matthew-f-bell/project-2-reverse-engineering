const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
        items_type: {
            type: String, 
			required: true,
        },
        items_description: {
            type: String,
			required: true,
        },
        location: {
            type: String,
			required: true,
        },
        price: {
            type: Number,
			required: true,
        },
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	},
	{
		timestamps: true,
	}
);


module.exports = mongoose.model("Item", itemSchema)

