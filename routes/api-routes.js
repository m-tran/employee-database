const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/example", (req, res) => {
    res.send("success from backend!");
});

module.exports = Router;