const userSchema = require("../utils/schema/register_user_schema");
const clientSchema = require("../utils/schema/clientSchema");
const registerMyUser = async (user) => {
    const response={
        data:{},
        error:"",
        message:""
    };

    try {
        const userData = await new userSchema(user);
        await userData.save();
        response.data = userData;
        response.error = null;
        response.message = "you are now registered"

    } catch (err) {
        response.data = null;
        response.error = err;
        response.message = 'email or phone is already registered'
    }
    return response;
    
}

const allUsers = async() => {
    const users = await userSchema.find();
    return users;
}

const updateUser = async(user) => {
    const client = await clientSchema.findOne({id:user.clientId});
    const data = await userSchema.findOne({_id:user.userId},)
    .updateOne(
        {$set:{firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                gender:user.gender,
                dob:user.dob,
                age:user.age,
                mobile:user.mobile,
                client:client ? client.name: ''
        
            }
    });
   
   
    // const data = await userSchema.findOne({_id:user.userId},).updateOne({$set:{email:user.email, gender:user.gender}});
    // const data = await userSchema.findOne({_id:user.userId},).updateOne({$set:{regUser:user}});
        return data;
    
    // code from official document of mongoose
    // Model.where({ _id: id }).update({ $set: { title: 'words' }})
    

}


const deleteUser = async(user) => {

   await userSchema.deleteOne({_id:user._id});
   
}

module.exports = {
    registerMyUser,
    allUsers,
    updateUser,
    deleteUser
}