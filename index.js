import dbConnect from "./config/database.js";
import dotenv from "dotenv";
// import e from express module
import express from "express";


// define port number
const PORT = 3000;
// initializes an Express application and assigns it to the app variable
const app = express();

// initializes the dotenv package and loads the environment variables from a .env file into process.env
dotenv.config();

// start express server have 2 parameter port and callback
app.listen(PORT,()=>{
    console.log(`server is runnin at port ${PORT}`);
})



// calling dbconnect
dbConnect();
