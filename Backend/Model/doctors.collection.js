const { client } = require("../Middleware/mongo.client");

const doctorsCollection = client.db("Doctors").collection("Doctor");

module.exports = { doctorsCollection };
