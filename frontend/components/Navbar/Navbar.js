import React, {useEffect, useState} from 'react';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router'
import axios from 'axios';
import cookie from 'js-cookie';
import {useUserContext} from '../../pages/context/state'


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
                <a className="navbar-brand" href="https://paxcom.ai/" target='_blank'>
                    Paxcom
                </a>
            </div>
            <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {token && <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/home">Home</a>
                      </li>}
                      {token && <li className="nav-item">
                        <a className="nav-link" href="https://paxcom.ai/" target='_blank'>About</a>
                      </li>
                      }
                      {token && <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Users</a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href='dashboard/users'> Users List  <i className={`fas fa-users ${styles.icon}`}></i></a></li>
                            <li><a className="dropdown-item" href="#">Clients List <i className={`fas fa-users ${styles.icon}`}></i></a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Add User <i className={`fas fa-user-plus ${styles.icon}`}></i></a></li>
                          </ul>
                        </li>
                      }
                      {token && <li className="nav-item">
                          <a className="nav-link" href="/" onClick={logoutHandler}>Logout</a>
                        </li>
                      }
                      {!token && 
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/login">SIGN&nbsp;IN</a>
                        </li>
                      }
                      {!token && 
                      <li className="nav-item">
                        <a className="nav-link" href="/register">SIGN&nbsp;UP</a>
                      </li>
                      } 
                    </ul>
                </div>
            </div>

        </nav>
        </div>
    )
} 

export default Navbar;

