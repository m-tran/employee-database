const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    first_name: String,
    last_name: Number,
    phone: Number,
    address: String,
    title: String,
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;