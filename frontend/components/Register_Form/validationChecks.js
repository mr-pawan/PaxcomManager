import isEmail from 'validator/lib/isEmail';

const checker = (userData, confromPssword) => {
    
    const res = {setStatus:false, setMsg:''};
     //only importing isEmail library from validator 
     if(!isEmail(userData.email)){
        res.setStatus = true;
        res.setMsg = 'Invalid email';
    }
    else if(userData.password !== confromPssword){
        res.setStatus=true;
        res.setMsg=`Password and conform password didn't match`;
    }
    else if(userData.password.length < 8){
        res.setStatus=true;
        res.setMsg=`Password couldn't less than 8 digit`
    }
    return res;
}

export default checker;