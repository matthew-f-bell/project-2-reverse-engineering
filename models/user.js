const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "You must provide a name property"],
		},
        username: {
            type: String, 
            required: [true],
        },
        email:  {type: String,
        },
        password: {
            type: String, 
            required: [true, "You must provide a password property"],
        },
        location: {
            type: String,
            required: [true, "You must enter a location"],
        },
        jobs: [{type: Schema. Types.ObjectId, ref: "Job" }],
        items:  [{type: Schema. Types.ObjectId, ref: "Item" }],

	},
	{
		timestamps: true,
	}
);



module.exports = mongoose.model("User", userSchema)