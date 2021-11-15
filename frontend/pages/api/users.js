import connectToDB from "../../utils/db/db_connect";
import userSchema from "../../utils/db/schema/register_user_schema";
connectToDB();

const users = async(req, res) => {
    const users = await userSchema.find();
    res.status(200).json(users);
}
export default users;