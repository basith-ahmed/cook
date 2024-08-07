const express = require("express");
const axios = require("axios");
const dotenv = require('dotenv').config();
const cookRouter = require("./routes/cook");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hey Chef! Let's cook something, head over to /cook");
});

app.use("/cook", cookRouter);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});