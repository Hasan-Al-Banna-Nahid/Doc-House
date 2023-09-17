const { client } = require("../Middleware/mongo.client");

const usersCollection = client.db("users").collection("user");
module.exports = usersCollection;
