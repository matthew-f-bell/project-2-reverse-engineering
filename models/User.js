const mongoose = ('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        Required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);