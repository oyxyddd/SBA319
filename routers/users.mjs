import express from "express"
const router = express.Router()
import Users from "../models/user.mjs"

//Getting all users
router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Get one user by email
router.get('/:email', getUser, async (req, res) => {
    try {
        // const users = await Users.find({"name":req.params.name})
        res.json(res.user)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Post new user 
router.post('/', async (req, res) => {
    const user = new Users({
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

//update password according to eamil address
router.patch("/:email", getUser, async (req, res) => {
    if (req.body.password != null){
        res.user.password = req.body.password
    }
    if (req.body.name != null){
        res.user.name = req.body.name
    }
    try{ 
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    }
    catch(err){
        res.status(400).json({message: err.message})

    }
})

//delete user according to eamil address
router.patch("/:email", getUser, async (req, res) => {
    try{
        await res.user.remove()
        res.json({message:  "Successfully delete user"})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

//middleware of finding a user by email
async function getUser(req, res, next){
    try{
        const user = await Users.find({"email":req.params.email.toLowerCase()})
        if (user == null){
            return res.status(404).json({message: "Cannot find User"})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.user = user
    next()
}

export default router