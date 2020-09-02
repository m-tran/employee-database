const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/employees", (req, res) => {
    db.Employee.find({}).then((employees) => res.send(employees));
});

router.post("/employees", (req, res) => {
    db.Employee.create(req.body)
    .then(function(dbEmployee) {
        res.json(dbEmployee);
    })
    .catch(function(err) { res.json(err); });
});

router.get("/departments", (req, res) => {
    db.Department.find({}).then((departments) => res.send(departments));
});

router.post("/departments", (req, res) => {
    db.Department.create(req.body)
    .then(function(dbDepartment) {
        res.json(dbDepartment);
    })
    .catch(function(err) { res.json(err); });
});

router.get("/roles", (req, res) => {
    db.Role.find({}).then((roles) => res.send(roles));
});

router.post("/roles", (req, res) => {
    db.Role.create(req.body)
    .then(function(dbRole) {
        res.json(dbRole);
    })
    .catch(function(err) { res.json(err); });
});

module.exports = Router;