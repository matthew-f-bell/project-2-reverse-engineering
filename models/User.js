const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        Required: true,
    },
    googleId: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);