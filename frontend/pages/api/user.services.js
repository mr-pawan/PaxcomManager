import registerMyUser from '../../facade/user.facade';

export default async function handler(req, res){
    const data = req.body;
    const resObj = await registerMyUser(data);
    res.status(201).json(resObj);
}