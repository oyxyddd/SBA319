import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
import { error } from "console"

mongoose.connect(process.env.ATLAS_URI)

const db = mongoose.connection
db.on('error',(error) => console.log(error))
db.once('open',(error) => console.log("Connected to Database"))

const app = express()

app.use(express.json())

import restaurantRouter from "./routers/restaurants.js"
app.use('/restaurants',restaurantRouter)

app.listen(3000, () => {console.log('Server Started')})

