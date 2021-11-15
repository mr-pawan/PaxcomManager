import styles from './SignUp.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import checker from './validationChecks';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import UnAuthNavbar from '../UnAuthNavbar/UnAuthNavbar';
const SignUp = () => {
    const router = useRouter();
    let addMsgAlert ={};
    const msgAlert = {
        border: '2px solid red'
    }

    //set the values of user data using state property of react
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    const [clientName, setClientName] = useState('');
    //status value htmlFor message showing client side
    const [status, setStatus] = useState(false);
    const [msg, setMsg] = useState('');


    //on click of signup butthtmlFn post data api for user services
    const signup = async () => {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            dob: dob,
            age: age,
            gender: gender,
            mobile: mobile,
      

        }
        
        // const myValidator = checker(userData, conformPassword);
        
        // //client side validation checks
        // //If status true means show error msg to client
        // if(myValidator.setStatus){
        //     setStatus(true);
        //     setMsg(myValidator.setMsg);
        //     return;
        // }
       

        try{
            const response = await axios.post(`${process.env.NEXT_PUBLIC_CONTEXT}/api/user/register`, userData);
            const res = response.data;
            // if res.data is found, successfully registered 

            if(res.data){
                router.push('/');
                
            }
            else{                  // else email is already registered
                setStatus(true);
                setMsg(res.message);
            }
            return;

        }
        catch(err){   
            console.log("error--->>>"+err);
        }
    }

    return(
        <>
        <UnAuthNavbar />
        <div className={styles.this_body}>
        <div className={styles.main_container}>
            <div className={styles.header}>
                SIGN UP
            </div>    
            <form action="/login">
            <div className={styles.formFld}>
                <div className={styles.name}>
                    <input className={styles.input} type='text' placeholder='First Name' value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input className={styles.input} type='text' placeholder='Last Name' value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className={styles.cred}>
                <div>
                    <input className={styles.input} style = {addMsgAlert} type='text' placeholder='email' value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input className={styles.input} type='password' placeholder='password' value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input className={styles.input} type='password' placeholder='conform password' value={conformPassword} 
                        onChange={(e)=> setConformPassword(e.target.value)}
                    />
                </div>
                <input className={styles.input} type='Date' placeholder='DOB' value={dob} 
                    onChange={(e)=> setDob(e.target.value)}
                />
                </div>
                <div className={`${styles.selfData} ${styles.input}`}>
                    <input className={styles.input} type='text' placeholder='age' value={age} 
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input className={styles.input} type="text" placeholder="gender" value={gender}
                        onChange={(e) => setGender(e.target.value)} 
                    />
                
                </div>
                <div className={styles.bottom}>
                    <input className={`${styles.input} ${styles.mobile}`} type='text' placeholder='Mobile' value={mobile} 
                        onChange={(e) => setMobile(e.target.value)}
                    />

                    
                    <button className={styles.submitBtn} 
                        onClick={signup}>
                    SIGN UP</button>
                    {
                        status ? <div className={styles.msg}>{msg}</div> : null
                    }
                </div>
            </div>
            </form>
        </div>
        
        </div>
     
        </>
    )
}

export default SignUp;


// const SignUp = () => {

//     return(
//     <>    
//       <div className={styles.body}>
//       <div className={styles.formHeading}>SIGN UP</div>
//         <div className={`px-3 ${styles.formContainer}`}>
//             <form>
//                 <div className="row">
//                     <div className="col-md-6">
//                     <label for="firstName">First Name</label>
//                         <input type="text" className="form-control mt-1" id="firstName" placeholder="First name"  autocomplete="off"/>
//                     </div>
//                     <div className="col-md-6">
//                     <label for="lastName">Last Name</label>
//                         <input type="text" className="form-control mt-1" id="lastName" placeholder="Last name"  autocomplete="off"/>
//                     </div>
//                 </div>
//                 <div className="row">
//                 <div className="col-md-6">
//                     <label for="email">Email</label>
//                         <input type="text" className="form-control mt-1" id="email" placeholder="Email" />
//                     </div>
//                     <div className="col-md-6">
//                     <label for="password">Password</label>
//                         <input type="password" className="form-control mt-1" id="password" placeholder="Last name"  autocomplete="off"/>
//                     </div>
//                 </div>
//                 <div className="row">
//                  <div className="col-md-6">
//                     <label for="confirmPassword">Confirm Password</label>
//                         <input type="password" className="form-control mt-1" id="confirmPassword" placeholder="Confirm Password" />
//                     </div>
//                     <div className="col-md-4">
//                     <label for="dob">Date of Birth</label>
//                         <input type="Date" className="form-control mt-1" id="dob" placeholder="Date of Birth"  autocomplete="off"/>
//                     </div>
//                     <div className="col-md-2">
                    // <div class="form-group">
                    //     <label for="gender">Gender</label>
                    //     <select class="form-select" aria-label="Default select example">
                    //         <option selected>Gender</option>
                    //         <option value="1">Male</option>
                    //         <option value="2">Female</option>
                    //         <option value="3">Others</option>
                    //     </select>
                    // </div>                   
//                  </div>
//                 </div>
  
//             </form>
//        </div>
//       </div>
   
//     </>
//     )
// }

// export default SignUp;