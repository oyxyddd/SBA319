import mongoose from "mongoose"
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name : String,
    email : String,
    movie_id : mongoose.Schema.ObjectId,
    text : String,
    date : Date
})

const Comments= mongoose.model("Comments",commentSchema)

export default Comments  