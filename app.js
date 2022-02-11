require("dotenv").config();
const port = process.env.PORT;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const OtpRouter = require("./Routers/otp.routes");

app.use("/otp", OtpRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(err.status || 404).json({
    message: "No such route exists",
  });
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message",
  });
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
