const express = require("express");
const app = express();
// const mongoose = require("mongoose");
// require('dotenv').config()
// app.use(cors());
// const bodtparser = require('body-parser')

// app.use(bodtparser.urlencoded({ extended: false }))


const PORT = process.env.PORT || 5000;
// const MOGODB_url =
//     "mongodb+srv://keval:keval@flutternotes.nkafc0p.mongodb.net/?retryWrites=true&w=majority";


app.get("/", (req, res) => {
    res.send(`<h1>Hello World</h1>`);
});
app.get("/user", (req, res) => {
    res.send({
        name: "Thumar Keval",
        email: "thumarkeval12@gmail.com"
    })
});

// mongoose.connect(MOGODB_url)
//     .then(function () {


//     })
//     .catch(() => {
//         throw `Error while Connecting MongoDB`;
//     });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});