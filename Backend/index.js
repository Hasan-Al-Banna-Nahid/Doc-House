require("dotenv").config();
const cors = require("cors");
const express = require("express");
const router = require("./Routes/route");
const app = express();
const PORT = process.env.PORT || 5000;

app.options("*", cors());
// app.use(
//   cors({
//     origin: "https://doc-house.vercel.app" || "http://localhost:3000",
//     credentials: true,
//   })
// );
app.use(cors());

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("Doctor is Sitting");
});
app.listen(PORT, () => {
  console.log(`Doc House Is Running At ${PORT}`);
});
