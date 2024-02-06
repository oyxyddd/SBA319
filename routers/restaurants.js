import express from "express"
const router = express.Router()
import RestaurantModel from "../models/restaurant.js"

//Getting all 
router.get('/', async (req, res) => {
    try {
        const restaurants = await RestaurantModel.find()
        res.json(restaurants)
    } catch (err) {
        res.status(500).jason({message: err.message})
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
