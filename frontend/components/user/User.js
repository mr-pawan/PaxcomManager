import React, {useState, useEffect} from 'react';
import EditUser from './EditUser';
import StaticUserData from './StaticUserData';

const User = ({cancelBtnHandler, userData, editUserStatus, setEditUserStatus}) => {

    
    return(
    <>
        {
            editUserStatus === false ? 
            <StaticUserData cancelBtnHandler={cancelBtnHandler} userData={userData}/>

           : <EditUser cancelBtnHandler={cancelBtnHandler} userData={userData} setEditUserStatus={setEditUserStatus}/>
        }
    </>

    )
}



export default User;
