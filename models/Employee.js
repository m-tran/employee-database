const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    first_name: String,
    last_name: Number,
    role_id: {
        type: Number,
        ref: "Role",
    },
    manager_id: Number,
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;