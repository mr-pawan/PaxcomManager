import styles from './StaticUserData.module.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import client from '../../pages/clients';
import EditUser from './EditUser';

const StaticUserData = ({cancelBtnHandler, userData}) => {
    // list of saved clients
    const [clients, setClients] = useState([]);
    const cancelBtnStatus = () => {
        cancelBtnHandler();
    }

    // fetching the clients to shows them in dropDown option
    useEffect(() => {
        const fetchClients = async() => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_CONTEXT}/api/client/allClients`);
            setClients(res.data);
        }
        fetchClients();
    }, []);
    

    
    return(
    <>
           <div className={styles.container}>  
           <div className="card"  style={{width: '22rem'}}>
                <i className={`fas fa-times-circle ${styles.cancelBtn}`} 
                    onClick={cancelBtnStatus}>
                </i>
                <img src="/Images/user1.jpg" className="card-img-top mx-auto" alt="..." style={{width: '12rem', height:'12rem'}}/>
                <div className="card-body mx-auto">
                    <span className="card-title " style={{textTransform:'capitalize', fontSize:'1.3rem', fontWeight:'bold'}}>{`${userData.firstName}  `}</span>
                    <span className="card-title " style={{textTransform:'capitalize', fontSize:'1.3rem', fontWeight:'bold'}}>{userData.lastName}</span>
                </div>
                <ul className="list-group list-group-flush">
                <li className={`list-group-item ${styles.listGroup}`}>
                      <div>Email : {`${userData.email}`}</div>
                  </li>
                  <li className={`list-group-item ${styles.listGroup}`}>
                     <div>Gender : {`${userData.gender}`}</div>
                      <div>DOB : {userData.dob.split('T')[0]}</div>
                  </li>                  
                  <li className={`list-group-item ${styles.listGroup}`}>
                  <div>Age : {`${userData.age}`}</div>
                    <div>Mobile : {`${userData.mobile}`}</div>
                  </li>                </ul>
                <div className={`card-body ${styles.listGroup}`}>
                <div>Client : {userData.client ? userData.client : `none`}</div>                
                </div>
            </div>
           </div>

        
    </>

    )
}



export default StaticUserData;
