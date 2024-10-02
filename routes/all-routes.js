import { Router } from "express";
import { getAllBookings, getOneBooking, postBooking, updateBooking, deleteBooking} from "../controllers/booking-controllers.js";
import mongoose from "mongoose";

export const bookingRouter = Router();


bookingRouter.get("/bookings", getAllBookings);
bookingRouter.get("/bookings/:id", getOneBooking);

bookingRouter.post('/booking', postBooking);
bookingRouter.patch('/booking/:id', updateBooking );
bookingRouter.delete('/booking/:id', deleteBooking);
