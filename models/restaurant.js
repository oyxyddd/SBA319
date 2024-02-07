import mongoose from "mongoose"
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name : String,
    email : String,
    movie_id : mongoose.Schema.ObjectId,
    text : String,
    date : Date
})

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