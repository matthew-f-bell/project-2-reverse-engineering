const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: String,

        username: String,
        
        email: String,

        location: String,

        jobs: [{type: mongoose.Schema.Types.ObjectId, ref: "Job" }],

        items:  [{type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
		
        googleId: String,

	},
	{
		timestamps: true,
	}
);


module.exports = mongoose.model("User", userSchema);