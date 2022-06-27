//Create a new router 

const express = require('express')

//Define routes and get. Basically different website on domain 
const router = express.Router()

// Object the website would provide
const voting = {
    pepperoni: 0,
    cheese: 0, 
    pizza: 0
};

router.get("/pairs", async(req, res, next) => {
    res.status(200).json(voting)
})

// router.get("/tradtional", async(req, res, next) => {
//     res.status(200).json()
// })

// allows other things in our app access to this module
module.exports = router