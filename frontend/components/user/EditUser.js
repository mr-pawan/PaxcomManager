import styles from './EditUser.module.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const EditUser = ({cancelBtnHandler, userData, setEditUserStatus}) => {
  
    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);
    const [email, setEmail] = useState(userData.email);
    const [gender, setGender] = useState(userData.gender);
    const [dob, setDob] = useState(userData.dob);
    const [age, setAge] = useState(userData.age);
    const [mobile, setMobile] = useState(userData.mobile);
    const [clientId, setClientId] = useState('');


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
    
    const saveUser = async() => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            dob: dob,
            age: age,
            gender: gender,
            mobile: mobile,
            clientId: clientId,
            userId: userData._id

        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_CONTEXT}/api/user/update`, data);
        const res = await response.data;
        setEditUserStatus(false);

    }
    
    return(
    <>
        {
           <div className={styles.container}>  
           <div className="card"  style={{width: '22rem'}}>
                <i className={`fas fa-times-circle ${styles.cancelBtn}`} 
                    onClick={cancelBtnStatus}>
                </i>
                <img src="/Images/user1.jpg" className="card-img-top mx-auto" alt="..." style={{width: '12rem', height:'12rem'}}/>
                <div className="card-body mx-auto">
                    <span className="card-title " style={{textTransform:'capitalize', fontSize:'1rem', fontWeight:'bold'}}>
                            <label for="firstName">First Name</label>
                            <input className={styles.input} id="firstName"
                                type="text"
                                aria-label="set first name"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                onClick = {(event) => event.target.focus()}
                                onKeyDown = {(event) => {if(event.key === "Enter") event.target.blur()}}
                           />
                    </span>
                    <span className="card-title " style={{textTransform:'capitalize', fontSize:'1rem', fontWeight:'bold'}}>
                        <label for="lastName">Last Name</label>
                            
                            <input className={styles.input} id="lastName"
                                type="text"
                                aria-label="set last name"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                onClick = {(event) => event.target.focus()}
                                onKeyDown = {(event) => {if(event.key === "Enter") event.target.blur()}}
                           />
                    </span>
                </div>
                <ul className="list-group list-group-flush">
                <li className={`list-group-item ${styles.listGroup}`}>
                        <label for="email">Email</label>
                         <input className={styles.input} id="email"
                            type="text"
                            aria-label="set email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            onClick = {(event) => event.target.focus()}
                            onKeyDown = {(event) => {if(event.key === "Enter") event.target.blur()}}
                       />
                  </li>
                  <li className={`list-group-item ${styles.listGroup}`}>
                     
                     <div class="form-group">
                        <label for="gender">Gender</label>
                        <select class="form-select" aria-label="select gender"
                        onChange={(event) => {setGender(event.target.value)}}>
                            <option selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                     
                      <div>
                        <label for="dob">Date of Birth</label>
                        <input type="Date" className="form-control mt-1" id="dob" value={dob} placeholder="Date of Birth"  autocomplete="off"
                            onChange={(event) => {setDob(event.target.value)}}
                        />

                      </div>
                  </li>                  
                  <li className={`list-group-item ${styles.listGroup}`}>
                  <div>
                  <label for="age">Age</label>
                       <input className={styles.input} id="age"
                            type="text"
                            aria-label="set age"
                            value={age}
                            onChange={(event) => setAge(event.target.value)}
                            onClick = {(event) => event.target.focus()}
                            onKeyDown = {(event) => {if(event.key === "Enter") event.target.blur()}}
                       />
                  </div>
                    <div>
                    <label for="mobile">Mobile</label>
                       <input className={styles.input} id="mobile"
                            type="text"
                            aria-label="set mobile"
                            value={mobile}
                            onChange={(event) => setMobile(event.target.value)}
                            onClick = {(event) => event.target.focus()}
                            onKeyDown = {(event) => {if(event.key === "Enter") event.target.blur()}}
                       />
                    </div>
                  </li>                </ul>
                <div className={`card-body ${styles.listGroup}`}>
                <select className={`form-select ${styles.selectClient}`} aria-label="Default select example"
                onChange = {(event) => setClientId(event.target.value)}>
                 <option selected>Select Client</option>
                {
                    clients.map(client => {
                      
                        return(
                            <option value={client.id}>{client.name} 
                            </option>
                        )
                    })
                }
                </select>
                <a href="/dashboard/users">
                    <button type="button" className={`btn btn-success ${styles.saveBtn}`} onClick = {saveUser}>
                        Save
                    </button>
                </a>
                </div>
            </div>
           </div>

        }
    </>

    )
}



export default EditUser;
