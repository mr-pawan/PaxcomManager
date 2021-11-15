import cookie from 'cookie';
export default async function handler(req, res){
    if(req.method === 'POST'){
        res.setHeader(
            'Set-Cookie',
            cookie.serialize('token', '', {
                httpOnly: true,
                secure: false,
                expires: new Date(0),
                sameSite: 'strict',
                path: '/'
            })
        );
       res.status(200).json({'msg':'Logout successfully'});
        
    }

}