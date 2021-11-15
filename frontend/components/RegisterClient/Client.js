import styles from './Client.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import checker from './validatorChecks';
import axios from 'axios';

const Client = () => {
    const router = useRouter();
  
    //set the values of user data using state property of react
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showErr, setShowErr] = useState(false);
    const [msg, setMsg] = useState('');


    //on click of signup button post data api for user services
    const registerClient = async() => {
        const clientData = {
            id:"",
            name: name,
            email: email
        }

        // const myValidator = checker(clientData);
        //client side validation checks
        //If status true means show error msg to client
        // if(myValidator.setStatus){
        //     setShowErr(true);
        //     setMsg(myValidator.setMsg);
        //     return;
        // }

        //post the client data for registration:
        const response = await axios.post('http://localhost:8000/api/client/registerClient', clientData);
        const res = await response.data;

        if(res.data){
            router.push('/');
        }
        else{                  // else email is already registered
            setShowErr(true);
            setMsg(res.message);
        }
    }

    return(
        <>
        <div className={styles.body}>
            <div className={styles.lowerBody}>
            <div className={styles.container}>
                <div className={styles.header}>
                    Register Client 
                </div>
                <div className={styles.formFld}>
                    <input className={styles.input} type='text' placeholder='Name' value={name} required 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input className={styles.input} type='text' placeholder='Email' value={email} required 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className={styles.registerBtn} 
                        onClick={registerClient}>
                            Register
                    </button>
                    {
                        showErr && <div>{msg}</div>
                    }
                   
                </div>
            </div>
            </div>
        </div>
        
     
        </>
    )
}

export default Client;