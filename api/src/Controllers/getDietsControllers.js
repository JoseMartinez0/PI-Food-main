const axios = require("axios");
const { API_KEY } = process.env;
const { Diet } = require("../db");
// const URL =

const getDiets = (req, res) => {
  res.send("Estoy en las dietas");
  //findOrCreate
};

module.exports = { getDiets };
