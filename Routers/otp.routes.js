const express = require("express");
const router = express.Router();
const { sendMail } = require("./emailService");

router.get("/", (req, res) => {
  res.json("hello");
});

router.post("/", async (req, res) => {
  const payload = req.body;
  console.log(payload);
  try {
    await sendMail({
      to: payload.to,
      OTP: payload.OTP,
    });
    return res.json(payload);;
  } catch (error) {
    return [false, "Unable to sign up, Please try again later", error];
  }
});

module.exports = router;
