const express = require("express");
const { doctors, singleDoctor } = require("../Controller/doctors.controller");
const { email } = require("../Controller/email.post");
const { booking, sendBooking } = require("../Controller/booking.collection");
const {
  user,
  admin,
  defaultUser,
  existingUser,
  makeAdmin,
  makeDefaultUser,
} = require("../Controller/user.collection");
const { sendToken } = require("../Controller/token");
const router = express.Router();

router.get("/doctors", doctors);
router.get("/doctors/:id", singleDoctor);
router.get("/booking", booking);
router.get("/user", user);
router.get("/user/admin/:email", admin);
router.get("/user/user/:email", defaultUser);
router.post("/booking", sendBooking);
router.post("/email", email);
router.post("/jwt", sendToken);
router.post("/user", existingUser);
router.patch("/user/admin/:id", makeAdmin);
router.patch("/user/user/:id", makeDefaultUser);

module.exports = router;
