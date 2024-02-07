import mongoose from "mongoose"
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title : String,
    directors : [String],
    languages : [String],
    year : number
})

const userSchema = new Schema({
    name : String,
    email : String,
    password : String
})

export default userSchema