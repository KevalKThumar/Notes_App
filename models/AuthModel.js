const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: (value) => {
                    const re =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                },
                message: "Please enter a valid email address",
            }
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
