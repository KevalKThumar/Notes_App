import express from "express";

const app = express();
const port = 9000;
app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.get('/home', (req, res) => {
  res.send({
    "name": "keval",
    "age": 19
  })
})

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
