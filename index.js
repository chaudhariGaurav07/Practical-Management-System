// import e from express module
import express from "express";


// define port number
const PORT = 3000;
// initializes an Express application and assigns it to the app variable
const app = express();

// start express server have 2 parameter port and callback
app.listen(PORT,()=>{
    console.log(`server is runnin at port ${PORT}`);
})