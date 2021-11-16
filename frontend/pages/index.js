import styles from '../styles/Login.module.css';
import Login from "../components/LogIn_Form/Login";


const login = () => {
  return(
    
    <>
    
      <div className={styles.main_container}>
        <div className={styles.login_container}>
            <Login />      
        </div>
      </div>
      
    </>
    
  )
}

export default login;

