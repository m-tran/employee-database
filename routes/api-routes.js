const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
    db.Employee.find().then((employees) => res.send(employees));
})

module.exports = Router;