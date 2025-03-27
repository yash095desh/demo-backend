const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Loading env variables

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json()); 
app.use(cors());



app.get("/",(req, res) => {
  return res.status(200).json("helllo..");
});



app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
});
