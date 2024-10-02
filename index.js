import express from "express";
//create an express app
const app = express();
import mongoose from "mongoose";
// import { bookingRouter, } from "./controllers/routes/all -routes.js";
import { bookingRouter } from "./routes/all-routes.js";
import 'dotenv/config';

//define routes
app.use(express.json())
app.use(bookingRouter)

//connect database
await mongoose.connect(process.env.MONGO_URI)
//listen for incoming requests
app.listen(7079, function () {
  console.log("app is listening on port 7079");
});
