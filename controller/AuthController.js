
const userModel = require('../models/AuthModel')
const { comparePassword, hashPassword } = require('../helper/authHelper')
const JWT = require('jsonwebtoken')
const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //validations
        if (!name) {
            return res.send({ error: "Name is Required" });
        }
        if (!email) {
            return res.send({ message: "Email is Required" });
        }
        if (!password) {
            return res.send({ message: "Password is Required" });
        }

        //check user
        const existingUser = await userModel.findOne({ email });

        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already Register please login",
            });
        }

        //register user
        const hashedPassword = await
            hashPassword(password);
        //save
        const user = await new userModel({
            name,
            email,
            password: hashedPassword,
        }).save();

        res.status(200).send({
            success: true,
            message: "User Register Successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error,
        });
    }
};



const loginController = async (req, res) => {

    try {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).send({
                success: false,
                message: "Email and Password are Required"
            });
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            });
        }
        const match = await
            comparePassword(password, user.password)
        if (!match) {
            return res.status(201).send({
                success: false,
                message: "Invalid Password"
            });

        }

        const token = JWT.sign({ _id: user._id }, "13QEWDSFGrty345*&yFs!@tgji*&GFD67^hgGFFFH ", { expiresIn: "14d" });

        res.status(200).send({
            success: true,
            message: "Login successfully",
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        });


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error,
        });
    }

}


module.exports = {
    loginController,
    registerController
}