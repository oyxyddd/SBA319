import mongoose from "mongoose"
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        minlength : 10
    } 
})

const Users= mongoose.model("Users",userSchema)

export default Users 