export const getAllBookings = (req, res) => {
  res.status(200).json("these are all bookings");
};

export const getOneBooking = (req, res) => {
  res.status(200).json("this is one booking");
};
export const postBooking = (req, res) => {
  res.status(201).json("post booking");
};

export const updateBooking = (req, res) => {
  res.status(200).json("update a booking");
};

export const deleteBooking = (req, res) => {
  res.status(200).json("delete a booking");
};
