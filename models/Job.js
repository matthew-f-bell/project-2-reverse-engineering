const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
        company: {
            type: String, 
        },
        description: {
            type: String,
        },
        date: {
            type: Date,
        },
        user_id: {type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'},
	},
	{
		timestamps: true,
	}
);


module.exports = mongoose.model("Job", jobSchema)


