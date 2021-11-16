import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Users.module.css';
import User from '../user/User'
import axios from 'axios';
import Link from 'next/link';


const Users = () => {

    // list of all registered users
    const [users, setUsers] = useState([]);

    // variable for pagination 
    const [pageNumber, setPageNumber] = useState(0);
    const [loading, setLoading] = useState(false);
    const usersPerPage = 10;
    const pageVisited = pageNumber * usersPerPage;
    // on click of page number pagevisited is changes which shows another user of that page
    const displayUsers = users.slice(pageVisited, pageVisited + usersPerPage);

    // userData that shows onClick in the list
    const [userData, setUserData] = useState(null);
       
    // fecthing all users 
    useEffect(() => {
        const fetchUsers = async() => {
            setLoading(true);
            const response = await axios.get('http://localhost:8000/api/user/allUsers');
            setUsers(response.data);
            setLoading(false);
        }
        fetchUsers();
    }, []);

    // user we want to search
    const [search, setSearch] = useState('');
    // onclick to submit btn search for user if found show all of them else show all the listed users
    const [searchBtnClickedStatus, setSearchBtnClickedStatus] = useState(false);


    // userState of array of searchedUser
    const [searchedUser, setSearchedUser] = useState([]);
    const pageCount = Math.ceil(users.length / usersPerPage);


    //edit user status
    const [editUserStatus, setEditUserStatus] = useState(false);
    

    const cancelBtnHandler = () => {
        setUserData(null);
        setEditUserStatus(false);
    }

    const showProfile = (user) => {
       setUserData(user);
       setEditUserStatus(false);
    }

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }
    const searchUser = () => {
        setSearchBtnClickedStatus(true);
        const filteredArray = users.filter( user => user.firstName.includes(search) ||
        user.lastName.includes(search) ||
        user.email.includes(search));
        setSearchedUser(filteredArray);
    }

    // delete user from database :
    const deleteUser = async() => {
        const response = await axios.post('http://localhost:8000/api/user/delete', userData);
        const data =  await response.data;
    }


    return(
        <>
            <div className={styles.body}>
                <div className={styles.leftBody}>
                    <div className={styles.heading}> Users
                    </div>
                    <div className={styles.lowerBody}>
                        <div className={styles.optionsContainer}>
                            <ul className={styles.options}>
                                <li className={styles.liItem}>Total Records: {users.length}</li>
                                <li>
                                    <div className="input-group mb-3">
                                        <input type="text" className= 'form-control'  placeholder="Search" aria-label="Search" 
                                            onChange={(e) => setSearch(e.target.value)}>
                                        </input>
                                        <div className="input-group-append">
                                            <span className={styles.cancelBtn}><i className={`fas fa-times`}></i></span>
                                          <button className="btn btn-outline-success" type="button" onClick={searchUser} >Search</button>
                                        </div>
                                    </div>
                                </li>
                                <li className={styles.liItem}> <i className={`fas fa-user-plus ${styles.icon}`}></i></li>
                                <li className={styles.liItem}> 
                                     <Link href="/dashboard/users"><i className={`fas fa-user-times ${styles.icon}`}
                                     onClick={deleteUser}></i></Link>
                                </li>
                                <li className={styles.liItem}> <i className={`fas fa-user-edit ${styles.icon}`} 
                                onClick = {() => setEditUserStatus(true)}></i></li>

                            </ul>
                        </div>
                        <div className={styles.displayContainer}>
                            <div className={styles.allUsers}>
                                {
                                    loading ? <h2>Loading ...</h2> : 
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Gender</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Clients</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                        {

                                            searchBtnClickedStatus && search ? searchedUser.map(user => {
                                                return (
                                                 <tr key={user._id} className={styles.userDataRow} onClick={() => showProfile(user)}>
                                                     <td>{user.firstName}</td>
                                                     <td>{user.lastName}</td>
                                                     <td>{user.gender}</td>
                                                     <td>{user.email}</td>
                                                     <td>{user.mobile}</td>
                                                 </tr> 
                                                )
                                            }):  
                                            displayUsers.map(user => {
                                                return (
                                                 <tr key={user._id} className={styles.userDataRow} onClick={() => showProfile(user)}>
                                                     <td style={{textTransform:'capitalize'}}>{user.firstName}</td>
                                                     <td style={{textTransform:'capitalize'}}>{user.lastName}</td>
                                                     <td>{user.gender}</td>
                                                     <td>{user.email}</td>
                                                     <td>{user.mobile}</td>
                                                     <td>{user.client ? user.client : ""}</td>
                                                 </tr> 
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                    
                                }
                            </div>
                        </div>
                    </div>
                    <ReactPaginate 
                        previousLabel={'Previos'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={styles.pagginationBtns}
                        previousLinkClassName={styles.previosBtn}
                        nextLinkClassName={styles.nextBtn}
                        disabledClassName={styles.paginationDisabled}
                        activeClassName={styles.paginationActive}                        
                    />
                </div>
                <div className={styles.rightBody}>
                {
            
                    userData && <User cancelBtnHandler = {cancelBtnHandler} userData={userData} editUserStatus={editUserStatus} setEditUserStatus={setEditUserStatus} />
               
                }
                </div>
            </div>    
            
        </>
    )

}

export default Users;