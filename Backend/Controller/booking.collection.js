const { bookingCollections } = require("../Model/booking.collection");
const { objectId } = require("mongodb");
const booking = async (req, res) => {
  const result = await bookingCollections.find().toArray();
  res.send(result);
};
const sendBooking = async (req, res) => {
  const body = req.body;
  console.log(body);
  const result = await bookingCollections.insertOne(body);
  res.send(result);
};
const deleteBooking = async (req, res) => {
  const id = req.params.id;
  const query = { id: new objectId(id) };
  const result = await bookingCollections.deleteOne(query);
  res.send(result);
};
module.exports = { booking, sendBooking, deleteBooking };
