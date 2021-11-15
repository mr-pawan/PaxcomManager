const userSchema = require("../utils/schema/register_user_schema");
const jwt = require("jsonwebtoken");


authenticateUser = async (email, password) => {
    const response = {data:{}, message:""};
    const user = await userSchema.findOne({ email });
    if (!user) {
        response.data = null;
        response.message="you are not registered";
    } else if (user.password === password) {
        //generate JWT token and assign to user
        const helper = { "name": user.firstName, "email": email }
        const token = await jwt.sign(helper, process.env.JWT_KEY);

        response.data = {
            "auth" : true,
            "token": token,
            "userName": user.firstName
        };
        response.message=`Welcome ${user.firstName}`

    } else {

        response.data = null;
        response.message="email id or password is incorrect";
    }
    return response;
}

module.exports = authenticateUser;
