const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Title can not be blank"],
		},
        company: {
            type: String, 
            required: [true, "You must provide company name"],
        },
        description: {
            type: String,
            required: [true, "Give item description"],
        },
        date: {
            type: Date,
            default: Date.now,
        },
        user_id: {
            items: [{type: mongoose.Schema.Types.ObjectId, 
                ref: "User"}],

        },

	},
	{
		timestamps: true,
	}
);


module.exports = mongoose.model("Job", jobSchema)
