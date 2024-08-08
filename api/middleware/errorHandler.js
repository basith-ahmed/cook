const express = require("express");
const axios = require("axios");
const router = express.Router();

module.exports = function errorHandler(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error("Error:", error.message);

      if (error.response) {
        res.status(error.response.status).json({ error: error.response.data });
      } else if (error.request) {
        res.status(500).json({ error: "No response received from the server" });
      } else {
        res
          .status(500)
          .json({ error: "An error occurred while processing the request" });
      }
    }
  };
};
