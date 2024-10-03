import express from "express";

import mongoose from "mongoose";
import cors from cors

// import { bookingRouter, } from "./controllers/routes/all -routes.js";
import { bookingRouter } from "./routes/all-routes.js";
import 'dotenv/config';
await mongoose.connect(process.env.MONGO_URI)


const app = express();

//define routes
app.use(cors())
app.use(express.json())
app.use(bookingRouter)

//connect database

//listen for incoming requests
app.listen(7079, function () {
  console.log("app is listening on port 7079");
});
