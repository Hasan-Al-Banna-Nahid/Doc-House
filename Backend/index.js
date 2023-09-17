require("dotenv").config();
const cors = require("cors");
const express = require("express");
const router = require("./Routes/route");
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 204, // Some legacy browsers (IE11) may require 204
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("Doctor is Sitting");
});
app.listen(PORT, () => {
  console.log(`Doc House Is Running At ${PORT}`);
});
