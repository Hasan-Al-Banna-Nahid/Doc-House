const { ObjectId } = require("mongodb");
const { bookingCollections } = require("../Model/booking.collection");
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
  const query = { id: new ObjectId(id) };
  const result = await bookingCollections.deleteOne(query);
  res.send(result);
};
module.exports = { booking, sendBooking, deleteBooking };
