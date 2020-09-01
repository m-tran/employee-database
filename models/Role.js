const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    title: String,
    salary: Number,
    department_id: {
        type: Number,
        ref: "Department",
    },
});

const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;