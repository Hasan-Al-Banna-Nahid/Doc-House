const { ObjectId } = require("mongodb");
const { usersCollection } = require("../Model/user.collection");

const user = async (req, res) => {
  console.log(usersCollection);
  const result = await usersCollection.find().toArray();
  // console.log(result);
  res.send(result);
};
const admin = async (req, res) => {
  const email = req.params.email;
  // if (req.decoded.email !== email) {
  //   res.send({ isAdmin: false });
  // }
  const query = { email: email };
  const user = await usersCollection.findOne(query);
  // console.log(user);
  const result = { admin: user?.role === "admin" };

  res.send(result);
};
const defaultUser = async (req, res) => {
  const email = req.params.email;
  // if (req.decoded.email !== email) {
  //   res.send({ isAdmin: false });
  // }
  const query = { email: email };
  const user = await usersCollection.findOne(query);
  // console.log(user);
  const result = { user: user?.role === "user" };

  res.send(result);
};
const existingUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  // const existingUser = await usersCollection.findOne(query);
  // if (existingUser) {
  //   res.send({ message: "User Already Exist" });
  // }
  const result = await usersCollection.insertOne(user);
  res.send(result);
};
const makeAdmin = async (req, res) => {
  const id = req.params.id;

  const updatedDoc = {
    $set: {
      role: "admin",
    },
  };
  const query = { _id: new ObjectId(id) };
  const result = await usersCollection.updateOne(query, updatedDoc);
  res.send(result);
};
const makeDefaultUser = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const updatedDoc = {
    $set: {
      role: "user",
    },
  };

  const result = await usersCollection.updateOne(query, updatedDoc);
  res.send(result);
};
module.exports = {
  user,
  admin,
  defaultUser,
  existingUser,
  makeAdmin,
  makeDefaultUser,
};
