import mongoose from "mongoose"
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    email : String,
    password : String
})

const Users = mongoose.model("Users",userSchema)

export default Users  