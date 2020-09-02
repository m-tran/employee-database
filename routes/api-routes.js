const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/employees", (req, res) => {
    db.Employee.find({}).then((employees) => res.send(employees));
});

router.get("/employees/:id", (req, res) => {
    db.Employee.findOne({ id: req.params.id })
    .then(function(dbEmployee) {
        res.send(dbEmployee);
    })
    .catch(function(err) { res.json(err); });
});

router.post("/employees", (req, res) => {
    db.Employee.create({ 
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        title: req.body.title,
    })
    .then(function(dbEmployee) {
        res.send(dbEmployee);
    })
    .catch(function(err) { res.json(err); });
});

router.delete("/employees/:id", (req, res) => {
    db.Employee.destroy({ 
        where: { id: req.params.id }
    })
    .then(() => res.send("deleted!"));
});

router.put("/employees", (req, res) => {
    db.Employee.update({ 
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        title: req.body.title,
    }, 
    { 
        where: { id: req.body.id }
    })
    .then(() => res.send("updated!"));
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

router.get("/roles/:id", (req, res) => {
    db.Role.findOne({ _id: req.params.id })
    .populate("department_id")
    .then(function(dbRole) {
        res.json(dbRole);
    })
    .catch(function(err) { res.json(err); });
});

module.exports = Router;