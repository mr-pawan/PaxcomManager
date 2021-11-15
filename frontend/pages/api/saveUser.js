import saveUser from '../../facade/saveUser.facade';

export default async function handler(req, res){
    const data = req.body;
    const resObj = await saveUser(data);
    res.status(202).json(resObj);
}

