// attempts to import the Express app from the app.js file before starting it and setting it to listen on the appropriate port.

//A framework that helps us create the API 
const express = require("express");

const morgan = require("morgan");

const giftExchangeRouter = require("/Users/ykesseyankomah/tdd-gift-giver-student-starter/routes/voting.js")

//Instantiate new instance of the application
const app = express();
//const app = require("./app");

//Looks for what kind of request and routes
app.use(morgan("tiny"));
app.use("/pairs", giftExchangeRouter)

//Adds a route to application 
app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

//Server location 
const port = 8080;

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
