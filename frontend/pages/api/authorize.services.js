import cookie from 'cookie';
export default async function handler(req, res){
    if(req.method === 'POST'){
        let pairs = req.headers.cookie.split(";");
        let splittedPairs = pairs.map(cookie => cookie.split("="));
        const cookieObj = splittedPairs.reduce(function (obj, cookie) {
        // cookie[0] is the key of cookie
        // cookie[1] is the value of the cookie
        // decodeURIComponent() decodes the cookie
        // string, to handle cookies with special
        // characters, e.g. '$'.
        // string.trim() trims the blank spaces
        // auround the key and value.
        obj[decodeURIComponent(cookie[0].trim())]
            = decodeURIComponent(cookie[1].trim());

        return obj;
    }, {})
    const jwtToken = cookieObj.token
    res.status(200).json({'token':jwtToken});

        
    }

}