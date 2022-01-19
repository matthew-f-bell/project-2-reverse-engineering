const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "You must provide a name property"],
		},
        items_type: {
            type: String, 
            required: [true, "You must provide item type"],
        },
        items_description: {
            type: String,
            required: [true, "Give item description"],
        },
        location: {
            type: String,
            required: [true, "You must enter your location"],
        },
        price: {
            type: Number,
            required: [true, "You must enter price for the item"],
        },
        user_id: {
            items: [{type: Schema. Types.ObjectId, 
                ref: "User"}],

        },

	},
	{
		timestamps: true,
	}
);


module.exports = mongoose.model("Item", itemSchema)