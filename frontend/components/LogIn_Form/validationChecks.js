import isEmail from 'validator/lib/isEmail';

const checker = (userData) => {
    const res = {setStatus:false, setMsg:''};

    if(userData.email === ''){
        res.setStatus = true;
        res.setMsg='Email is required';
    }else if(userData.password === ''){
        res.setStatus = true;
        res.setMsg = 'Password is required';
    }
    else if(!isEmail(userData.email)){
        res.setStatus = true;
        res.setMsg = "Invalid email";
    }
    return res;
}

export default checker;