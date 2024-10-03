import { booking } from "../models/booking-models.js";

export const getAllBookings = (req, res) => {
  res.status(200).json("these are all bookings");
};

export const getOneBooking = (req, res) => {
  res.status(200).json("this is one booking");
};
export const postBooking =  async (req, res) => {
  const newBooking =  new booking(req.body)
  const bookings =  await newBooking.save()

 // console.log('request', req)

  res.status(201).json(bookings);
};

export const updateBooking = (req, res) => {
  res.status(200).json("update a booking");
};

export const deleteBooking = (req, res) => {
  res.status(200).json("delete a booking");
};

