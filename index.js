import dbConnect from "./config/database.js";
import dotenv from "dotenv";
// import e from express module
import express from "express";

import feedbackRoutes from "./routes/feedbackRouts.js"

// define port number
const PORT = 3010;
// initializes an Express application and assigns it to the app variable
const app = express();

app.use(express.json());//middleware


// initializes the dotenv package and loads the environment variables from a .env file into process.env
dotenv.config();

app.use("/api/v1",feedbackRoutes);

  
  


// calling dbconnect
dbConnect();

// start express server have 2 parameter port and callback
app.listen(PORT,()=>{
    console.log(`server is runnin at port ${PORT}`);
})


