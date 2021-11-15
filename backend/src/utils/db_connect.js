const mongooose = require("mongoose");

mongooose.connect("mongodb://localhost:27017/CompanyDB", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log("connected to database"))
.catch(err => console.log("No connection " + err));