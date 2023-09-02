import express from "express";

const app = express();
const port = 9000;
app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
