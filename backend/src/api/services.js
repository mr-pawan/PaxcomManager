const express = require("express");
const router = express.Router();

module.exports = function(app){
    app.use("/api/auth", require("./auth.services"));
    app.use("/api/user", require("./user.services"));
    app.use("/api/client",require("./client.services"));
    return router;
}