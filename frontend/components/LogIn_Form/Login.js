import styles from './Login.module.css';
import Link from 'next/link';
import {useState} from 'react';
import { useRouter } from 'next/router';
import checker from './validationChecks';
import cookie from 'js-cookie';
import axios from 'axios';
import UnAuthNavbar from '../UnAuthNavbar/UnAuthNavbar';



const Login = () => {

    const router = useRouter();
    const a_style = {
        color: 'rgb(11, 11, 97)',
        textDecoration: 'underline'
    }


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //status is used to show serer side msg of authentication to user in div element 
    //which is only show when status is true 
    const [status, setStatus] = useState(false);

    //msg used to show msg of authentication
    const [msg, setMsg]= useState("");
    

    //on click of SignIn button post data for authentication to api
    const login = async(event) => {
        const userData = {
            email: email,
            password: password
        }
        const myValidator = checker(userData);
        
        //client side validation checks
        //If status true means show error msg to client
        if(myValidator.setStatus){
            setStatus(true);
            setMsg(myValidator.setMsg);
            return;
        }

        
        const response = await axios.post(`${process.env.NEXT_PUBLIC_CONTEXT}/api/auth/login`, userData);

        const res = await response.data;
        //if res.data is null or undefined then it is not registerd
        if(!res.data){
            setStatus(true);
            setMsg(res.message);
        }else if(res.data.auth){   // if res.data.auth is true found that means user authenticated
            cookie.set('token', res.data.token);  // set cookie token browser
            router.push('/home')
        }else{                          // otherwise that means email or password is incorrect
            setStatus(true);    
            setMsg(res.message);
        }

    }
  
  
    return(
        <>
        <UnAuthNavbar />
        <div className={styles.signIn}>
            <div className={styles.header}>
                SIGN IN
            </div>
            <div className={styles.formFld}>
                <input className={styles.input} type='text' placeholder='Email' value={email} required 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className={styles.input} type='password' placeholder='Password' value={password} required 
                    onChange={(e) => setPassword(e.target.value)}
                />
           

                <div className={styles.forgetFld}>
                    <Link href='/register'>
                        <a>forget password</a>
                    </Link>
                </div>
               
                <button className={styles.signInBtn} 
                    onClick={(e) => login(e)}>
                    SIGN IN
                </button>
            
               
                <div className={styles.create}>
                    Don&#39;t have account<Link href='/register'><a style={a_style}> SIGN UP </a></Link>
                </div>
               {
                   status?<div className={styles.msg}>{msg}</div>:null
               }
            </div>
        </div>
        </>
    )
}

export default Login;

