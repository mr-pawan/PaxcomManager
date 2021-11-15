const mongoose = require("mongoose");
const validator = require("validator");

const registerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exist",],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
})

const clientSchema = new mongoose.model("Client", registerSchema);     //pascal convention

module.exports = clientSchema;