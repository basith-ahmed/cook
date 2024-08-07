const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require('dotenv').config();
const cookRouter = require("./routes/cook");

const port = process.env.PORT || 3001;

const app = express();

// app.use(cors({
//   origin: "https://cook-client.basithahmed.me"
// }));

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hey Chef! Let's cook something, head over to /cook");
});

app.use("/cook", cookRouter);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});