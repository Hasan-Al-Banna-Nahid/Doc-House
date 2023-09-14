require("dotenv").config();
const jwt = require("jsonwebtoken");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Doctor is Sitting");
});
app.listen(PORT, () => {
  console.log(`Doc House Is Running At ${PORT}`);
});
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "iambanna300@gmail.com",
    pass: process.env.gmail_app_pass,
  },
});
mailchimp.setConfig({
  apiKey: process.env.Mailchimp_API,
  server: "us13",
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.ubkqbs2.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyJwt = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ message: "Unauthorized user" });
  }
  const token = authorization.split(".")[1];
  console.log(token);

  jwt.verify(token, process.env.Access_Token, function (err, decoded) {
    if (err) {
      return res.status(403).send({ error: true, message: "Forbidden Access" });
    }
    req.decoded = decoded;
    next();
  });
};

async function run() {
  try {
    const bookingCollections = client.db("bookings").collection("booking");
    const doctorsCollection = client.db("Doctors").collection("Doctor");
    const usersCollection = client.db("users").collection("user");
    await client.connect();
    app.post("/email", async (req, res) => {
      const { email, service } = req.body;
      // const response = await mailchimp.ping.get();
      // console.log(response);

      // const response = await mailchimp.lists.addListMember("03c267bfa9", {
      //   email_address: email,
      //   status: "subscribed",
      // });
      // if (!response) {
      //   console.log("User Already Exists");
      //   return;
      // }
      // console.log(email);
      const info = await transporter.sendMail({
        from: '"Doc House 👻" <iambanna300@gmail.com>',
        to: email,
        subject: "Booking Confirmed ✔",
        text: `Your Booking Is Successfully Confirmed for${service}`,
        html: "<b>Booking Confirmed?</b>",
      });
      console.log("Message sent: %s", info.messageId);
    });

    app.get("/doctors", async (req, res) => {
      const result = await doctorsCollection.find().toArray();
      res.send(result);
    });
    app.get("/doctors/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await doctorsCollection.find(query).toArray();
      res.send(result);
      console.log(result);
    });
    app.get("/booking", async (req, res) => {
      const result = await bookingCollections.find().toArray();
      res.send(result);
    });
    app.get("/user", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });
    app.get("/user/admin/:email", async (req, res) => {
      const email = req.params.email;
      // if (req.decoded.email !== email) {
      //   res.send({ isAdmin: false });
      // }
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      // console.log(user);
      const result = { admin: user?.role === "admin" };

      res.send(result);
    });
    app.get("/user/user/:email", async (req, res) => {
      const email = req.params.email;
      // if (req.decoded.email !== email) {
      //   res.send({ isAdmin: false });
      // }
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      // console.log(user);
      const result = { user: user?.role === "user" };

      res.send(result);
    });

    app.post("/booking", async (req, res) => {
      const body = req.body;
      console.log(body);
      const result = await bookingCollections.insertOne(body);
      res.send(result);
    });
    app.post("/booking", async (req, res) => {
      const body = req.body;
      console.log(body);
      const result = await bookingCollections.insertOne(body);
      res.send(result);
    });
    app.post("/user", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        res.send({ message: "User Already Exist" });
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
    app.patch("/user/admin/:id", async (req, res) => {
      const id = req.params.id;

      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.updateOne(query, updatedDoc);
      res.send(result);
    });
    app.patch("/user/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          role: "user",
        },
      };

      const result = await usersCollection.updateOne(query, updatedDoc);
      res.send(result);
    });
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.Access_Token);
      res.send({ token });
    });
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
