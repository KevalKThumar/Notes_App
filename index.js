import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();



app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000;

const MOGODB_url =
  "mongodb+srv://keval:keval@flutternotes.nkafc0p.mongodb.net/?retryWrites=true&w=majority";

await mongoose.connect(MOGODB_url).then(() => {
  console.log(`DB connected`)
}).catch(() => {
  throw `Error while Connecting MongoDB`;
});


app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.get('/user', (req, res) => {
  res.send({
    name: "keval",
    age: "19"
  })
})


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
