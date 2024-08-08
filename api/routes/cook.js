const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv").config();
const errorHandler = require("../middleware/errorHandler");

const router = express.Router();

const KEY = process.env.API_KEY;

if (!process.env.API_KEY) {
  throw new Error("API_KEY not set in environment variables");
}

router.get("/", (req, res) => {
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
        <h1>COOK-API Documentation</h1>
        <p>Welcome to the COOK API!</p>
        <p>To read further about the API, head over to <a href="https://github.com/basith-ahmed/cook" target="_blank">documentation</a> page.</p>
        <h2>Endpoints:</h2>
        <h3>GET cook/</h3>
        <p>Returns the COOK-API documentation(current page).</p>
        <h3>GET cook/:something</h3>
        <p>Fetches url of the random image of the specified something.</p>
        <pre>
          Example Request:
          GET cook/pizza

          Example Response:
          {
            "imageUrl": "https://example.com/pizza.jpg"
          }
        </pre>
      </div>
    </body>
    </html>
  `;
  res.status(200).send(documentation);
});

router.get("/:dish", errorHandler(async (req, res) => {
    const dish = req.params.dish;
    const response = await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${dish}&image_type=photo`
    );

    const images = response.data.hits;

    if (images.length > 0) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      res.status(200).json({ imageUrl: randomImage.webformatURL });
    } else {
      res.status(404).json({ error: "No images found for this keyword" });
    }
  })
);

module.exports = router;
