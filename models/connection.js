const mongoose = require("mongoose");

const MONGODB_URI = 
    process.env.MONGODB_URI || "mongodb://localhost/employee_database";

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("you are connected to mongodb"))
    .catch((err) => console.log(err));

module.exports = mongoose;