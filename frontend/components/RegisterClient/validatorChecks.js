import isEmail from 'validator/lib/isEmail';

const checker = (clientData) => {
    const res = {setStatus:false, setMsg:''};

    if(clientData.clientEmail === ''){
        res.setStatus = true;
        res.setMsg='Email is required';
    }
    else if(!isEmail(clientData.clientEmail)){
        res.setStatus = true;
        res.setMsg = "Invalid email";
    }
    return res;
}

export default checker;
