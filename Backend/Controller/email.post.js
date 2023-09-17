require("dotenv").config();
const nodemailer = require("nodemailer");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const accountSid = "AC6f8ef528e7ae89f2985a72524f0d63a3";
const authToken = "8867cff978be971e688f6aa8d6aea50f";
// const { CourierClient } = require("@trycourier/courier");
// const client = require("twilio")(accountSid, authToken);

// const courier = CourierClient({
//   authorizationToken: "pk_prod_DHMD3YYFMQ474DGHTXT5SB5C1DAG",
// });
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "iambanna300@gmail.com",
    pass: process.env.gmail_app_pass,
  },
});
mailchimp.setConfig({
  apiKey: process.env.Mailchimp_API,
  server: "us13",
});
const email = async (req, res) => {
  const { email, service, name } = req.body;
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
  // const { requestId } = await courier.send({
  //   message: {
  //     to: {
  //       email: email,
  //     },
  //     template: "47VSD7NYNR49XVNYQ7HE4X7NK580",
  //     data: {
  //       recipientName: name,
  //       service: service,
  //     },
  //   },
  // });

  const info = await transporter.sendMail({
    from: '"Doc House 👻" <iambanna300@gmail.com>',
    to: email,
    subject: "Booking Confirmed ✔",
    text: `Your Booking Is Successfully Confirmed for${service}`,
    html: "<b>Booking Confirmed?</b>",
  });
  console.log("Message sent: %s", info.messageId);

  // client.messages
  //   .create({
  //     from: "+15178887443",
  //     to: "+8801330423673",
  //     body: "Your Appointment Is Successfully Booked",
  //   })
  //   .then((message) => console.log(message.sid))
  //   .catch((err) => console.log(err));
};
module.exports = { email };
