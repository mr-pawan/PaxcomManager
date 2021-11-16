import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Home.module.css';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
const home = ({token, userName}) => {

    console.log(`mode -> ${process.env.NEXT_PUBLIC_MODE}`);
    return(
        <>
            { !token ? <h1>You are not authorized</h1> :
            <>
                <Navbar />
                <div className={styles.home_body}>
                    <h1 style={{textTransform:'capitalize'}}>Welcome {userName}</h1>
                </div>
            </>
            }
        </>
    )
}

export default home;

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
        let payload; 
        if(cookieObj.token){
         payload = await jwt.verify(cookieObj.token, process.env.JWT_KEY);
        }
    return {
        props: {
            token: cookieObj.token|| "",
            userName: !payload ? "" : payload.name

        }
    }
}