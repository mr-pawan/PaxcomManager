const express = require("express");
const router = express.Router();

const {registerMyClient, allClients} = require("../facade/client.facade");

router.post("/registerClient", async(req, res) => {
    const client = req.body; 
    client.id = 141;
    const response = await registerMyClient(client);
    console.log('response', response);
    res.status(200).json(response);

})

router.get("/allClients", async(req, res) => {
    const response = await allClients()
    res.status(200).json(response);
})


module.exports = router;