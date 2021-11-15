import Users from "../../components/Users/Users";
import Navbar from '../../components/Navbar/Navbar';

const users = ({token}) => {
    return (
        
        <>
            { !token ? <h1>You are not authorized</h1> : 
            <>
                <Navbar />
                <Users /> 
            </>
            }
        </>
    
    );

  
}

export default users;


export async function getServerSideProps({req, res}){

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
    return {
        props: {
            token: cookieObj.token|| "",
        }
    }
}

