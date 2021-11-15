const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require('cors')//connect to database
require("./utils/db_connect");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const services = require("./api/services");
app.use(services(app));


app.listen(PORT, () => {
    console.log(`Listining to the port ${PORT}`);
})
