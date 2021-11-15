const { registerMyUser, allUsers, updateUser, deleteUser } = require("../facade/user.facade");

const express = require("express");
const router = express.Router();


router.get("/allUsers", async(req, res) => {
   const response = await allUsers();
   res.status(200).json(response);
})


router.post("/register", async(req, res) => {
    const user = req.body;
    const response = await registerMyUser(user);
    res.status(200).json(response);

    
});

router.post("/logout", (req, res) => {
    res.clearCookie("myToken");
    res.json({message: "You are successfully logout"});
})

router.post("/update", async(req, res) => {
    const user = req.body;
    const response = await updateUser(user);
    res.status(200).json(response);

})

router.post("/delete", async(req, res) => {
    const user = req.body;
    deleteUser(user);
})



module.exports = router;