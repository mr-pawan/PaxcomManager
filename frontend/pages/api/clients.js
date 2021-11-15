import connectToDB from "../../utils/db/db_connect";
import clientSchema from "../../utils/db/schema/client_schema";
connectToDB();

const clients = async(req, res) => {
    const users = await clientSchema.find();
    res.status(200).json(users);
}
export default clients;