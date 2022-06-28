//Create a new router

const express = require("express");

//Define routes and get. Basically different website on domain
const router = express.Router();

// Object the website would provide
const voting = {
  pepperoni: 0,
  cheese: 0,
  pizza: 0,
  hello: 1,
};

router.post("/", async (req, res, next) => {
  res.status(200).json(voting);
});

// router.get("/tradtional", async(req, res, next) => {
//     res.status(200).json(voting)
// })

// allows other things in our app access to this module
// express adds functionality on top of node
// module is an object which stores data on the file that we are currently in 
// When you attach it to module it we make it available to any part of the application 
//Grabs reference to router and attaches it then exports it
module.exports = router;
