import mongoose from "mongoose"

const restaurantSchema = new mongoose.Schema({
    address: Object,
    borough: String,
    cusine: String,
    grades :[],
    name: {
        type:String,
        required: true
    },
    restaurant_id: String
})

const RestaurantModel = mongoose.model("Restaurant",restaurantSchema)
export default RestaurantModel