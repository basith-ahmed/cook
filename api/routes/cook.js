const express = require("express");
const axios = require("axios");
const dotenv = require('dotenv').config();
const getImage = require("../middleware/getImage");

const router = express.Router();

const key = process.env.API_KEY;

router.get("/", (req, res) => {
  res.status(200);
  res.send("You have reached the kitchen! Lets cook something!");
});

router.get("/:animal", getImage, (req, res) => {});

module.exports = router;
