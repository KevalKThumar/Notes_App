import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();



app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});
app.get('/user', (req, res) => {
  res.send({
    name: "keval",
    age: "19"
  })
})
// const MOGODB_url =
//   "mongodb+srv://keval:keval@flutternotes.nkafc0p.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(MOGODB_url)
//   .then(function () {

//     app.get("/", (req, res) => {
//       res.send(`<h1>Hello World</h1>`);
//     });
//     app.get('/user', (req, res) => {
//       res.send({
//          name: "keval",
//          age: "19"
//        })
//     })
//     // app.use("/notes", noteRouter)
//   })
//   .catch(() => {
//     throw `Error while Connecting MongoDB`;
//   });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
