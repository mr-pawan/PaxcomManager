const clientSchema = require("../utils/schema/clientSchema");

const registerMyClient = async (client) => {
    const response={
        data:{},
        error:"",
        message:""
    };

    try {
        const clientData = await new clientSchema(client);
        await clientData.save();
        response.data = clientData;
        response.error = null;
        response.message = "you are now registered"

    } catch (err) {
        response.clientData = null;
        response.error = err;
        response.message = 'email or phone is already registered'
    }
    return response;
    
}

const allClients = async() => {
    const clients = await clientSchema.find();
    return clients;
}


module.exports = {
    registerMyClient,
    allClients,
}