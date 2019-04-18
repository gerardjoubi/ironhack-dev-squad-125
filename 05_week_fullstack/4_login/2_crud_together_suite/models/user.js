const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true,
    },
});

userSchema.index({ email: 1 }, { unique: true }); // ensure unique email
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;