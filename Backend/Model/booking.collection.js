const { client } = require("../Middleware/mongo.client");

const bookingCollections = client.db("bookings").collection("booking");
module.exports = { bookingCollections };
