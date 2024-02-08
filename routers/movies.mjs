import express from "express"
const router = express.Router()
import Movies from "../models/movie.mjs"

//Getting all 
router.get('/', async (req, res) => {
    try {
        const movies = await Movies.find()
        res.json(movies)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//Get One 
router.get('/:id',(req, res) => {
    res.send(req.params.id)
    
})
//Creating one 
router.post('/',(req, res) => {

})
//Updating one 
router.patch('/',(req, res) => {

})

//deleting one 
router.delete('/:id',(req, res) => {

})

export{router as default}
