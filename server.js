const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
const cors = require("cors");
require("./models/connection");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
