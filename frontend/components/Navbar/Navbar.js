import React, {useEffect, useState} from 'react';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router'
import axios from 'axios';
import cookie from 'js-cookie';
import Link from 'next/link'



const Navbar = () => {
  const router = useRouter();
  
  const token = cookie.get('token');

  const logoutHandler = async() => {
    cookie.remove("token");  // remove token
    const response = await axios.post('http://localhost:8000/api/user/logout', userData);
    const res = await response.data;
  }

       
    return(
        <div className={`${styles.nav}`}>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <div className="container-fluid">
              <Link href="https://paxcom.ai/"  target='_blank'  rel="noreferrer"><a className="navbar-brand" >Paxcom</a></Link>
            </div>
            <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">                       
                        <Link aria-current="page" href="/home"><a className="nav-link active" >Home</a></Link>
                      </li>
                      <li className="nav-item">
                        <Link  href="https://paxcom.ai/" target='_blank'  rel="noreferrer"><a className="nav-link">About</a></Link>
                      </li>
                      
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Users
                        </a>

                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link href='dashboard/users'><a  className="dropdown-item">Users List</a></Link></li>
                            <li><Link  href="#"><a className="dropdown-item">Clients List</a></Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Add User</a></li>
                          </ul>
                        </li>
                      
                      {/* <li className="nav-item dropdown">
                        <Link href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <a  className="nav-link dropdown-toggle">Users</a>
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          
                          <li><Link href='dashboard/users'><a className="dropdown-item">Users List</a></Link><i className={`fas fa-users ${styles.icon}`}></i></li>
                          <li><Link  href="#"><a className="dropdown-item">Clients List</a></Link><i className={`fas fa-users ${styles.icon}`}></i></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><Link  href="#"><a className="dropdown-item">Add User</a></Link><i className={`fas fa-user-plus ${styles.icon}`}></i></li>
                        </ul>
                      </li> */}
                      
                    <li className="nav-item">
                      <Link  href="/" onClick={logoutHandler}><a className="nav-link">Logout</a></Link>
                    </li>
                      
                    
                     
                    </ul>
                </div>
            </div>

        </nav>
        </div>
    )
} 

export default Navbar;

