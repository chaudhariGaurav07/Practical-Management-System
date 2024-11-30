import express from "express";
import dotenv from "dotenv";
dotenv.config();
import dbConnect from "../config/database.js";
import router from "../routes/feedbackRouts.js";


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/gaurav", router);

dbConnect();

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});

