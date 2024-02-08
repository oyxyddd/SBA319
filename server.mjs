import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
import { error } from "console"


//commect to mongoDB database
mongoose.connect(process.env.ATLAS_URI)
const db = mongoose.connection
db.on('error',(error) => console.log(error))
db.once('open',(error) => console.log("Connected to Database"))


const app = express()

app.use(express.json())

import movieRouter from "./routers/movies.mjs"
app.use('/movies',movieRouter) 

import userRouter from "./routers/users.mjs"
app.use('/users',userRouter) 

app.listen(3000, () => {console.log('Server Started on port 3000')})

