import express from "express"
const router = express.Router()
import User from "../models/user.mjs"

//Getting all users
router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Get one user by name
router.get('/:name', async (req, res) => {
    try {
        const users = await Users.find({"name":req.params.name})
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Post new user 
router.post('/', async (req, res) => {
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

export default router