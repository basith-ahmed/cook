const axios = require("axios");
const dotenv = require('dotenv').config();

const KEY = process.env.API_KEY;

async function getImage(req, res, next) {
    const animal = req.params.animal;
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${KEY}&q=${animal}&image_type=photo`
      );
      
      const images = response.data.hits;
  
      if (images.length > 0) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        res.status(200).json({ imageUrl: randomImage.webformatURL });
      } else {
        res.status(404).json({ error: "No images found for this animal" });
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the image" });
    }
    next();
}

module.exports = getImage;