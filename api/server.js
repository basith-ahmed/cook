const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookRouter = require("./routes/cook");

const port = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: "https://cook-client.basithahmed.me"
}));

app.get("/", (req, res) => {
  const documentation = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>API Documentation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #333;
        }
        pre {
          background-color: #f4f4f4;
          padding: 10px;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome!</h1>
        <p>Hey Chef! Let's cook something, head over to <a href="/cook">/cook</a>.</p>
      </div>
    </body>
    </html>
  `;
  res.status(200).send(documentation);
});

app.use("/cook", cookRouter);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
