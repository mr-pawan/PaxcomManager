const authenticateUser = require("../facade/auth.facade");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({"auth":"success"});
})

router.post("/login", async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const response = await authenticateUser(email, password);
    
    //set token to cookie
    if(response.data){
        res.cookie("myToken", response.data.token, {expire : new Date(Date.now()+30000)});      
    }
    res.status(200).json(response);

});


module.exports = router;
