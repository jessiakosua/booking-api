import express from "express";
//create an express app
const app = express();
// import { bookingRouter, } from "./controllers/routes/all -routes.js";
import { bookingRouter } from "./routes/all-routes.js";

//define routes
app.use(bookingRouter)
//listen for incoming requests
app.listen(7079, function () {
  console.log("app is listening on port 7079");
});
