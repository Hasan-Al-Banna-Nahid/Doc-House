const { ObjectId } = require("mongodb");
const { doctorsCollection } = require("../Model/doctors.collection");

const doctors = async (req, res) => {
  const result = await doctorsCollection.find().toArray();
  res.send(result);
};
const singleDoctor = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await doctorsCollection.find(query).toArray();
  res.send(result);
  console.log(result);
};
module.exports = { doctors, singleDoctor };
