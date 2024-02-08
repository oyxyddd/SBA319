import mongoose from "mongoose"
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title : String,
    directors : [String],
    languages : [String],
    year : number
})

const Movies = mongoose.model("Movies",movieSchema)

export default Movies  