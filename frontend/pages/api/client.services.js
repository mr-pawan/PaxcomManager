import registerMyClient from "../../facade/registerClient";

export default async function handler(req, res){
    const data = req.body;
    const resObj = await registerMyClient(data);
    res.status(201).json(resObj);
}