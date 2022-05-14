const asyncHandler = require("express-async-handler");
const Otp = require("../models/otpModel");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: "ef7d6c1a",
  apiSecret: "MyJKBVyTQZX3NDld",
});

var client = require("twilio")(
  "AC31a1a14cc1687cd69d005703423ab4f8",
  "b02eb7d769734c5c70651af50fe05d3e"
);
/*
LIST OF CONTROLLERS
1. Send email of otp
2. Check otp
3. Send message of Otp
*/

// 1. Send email of otp
const sendEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;
  // console.log(email);
  const data = await Otp.findOne({ email: email });
  // console.log(data);
  if (data) {
    // console.log(data._id);
    await Otp.findByIdAndRemove(data._id);
  }
  try {
    const otpCode = Math.floor(Math.random() * 1000000 + 1);
    const otpData = new Otp({
      email: email,
      otpCode: otpCode,
      expiresIn: new Date().getTime() + 300 * 1000,
    });
    const response = await otpData.save();
    // res.status(200).json({
    //   success: true,
    //   data: response,
    // });
    const output = `
      '<h2>OTP for email verification</h2>
    <p>Your OTP is ${otpCode}. OTP is valid for next 5 minutes.</p>
    <p></p>
    <p>Regards</p>
    <p>Team XcitEducation</p>
  `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: `${process.env.XCITEDU_EMAIL}`, // generated ethereal user
        pass: `${process.env.XCITEDU_PASSWORD}`, // generated ethereal password
      },
      // If on localhost
      tls: {
        rejectUnauthorized: false,
      },
      service: "gmail",
    });

    // send mail with defined transport object
    let mailOptions = {
      from: "Team XcitEducation",
      to: `${email}`,
      subject: "OTP for email verification ✔",
      html: output,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.json(error);
      } else {
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.status(200).json({
          success: true,
          emailSuccess: true,
          data: response,
        });
      }
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: "Email does not exist ",
    });
  }

  // else {

  // }
});

// 2. Check otp
const checkOtp = asyncHandler(async (req, res) => {
  const { email, otpCode } = req.body;

  const data = await Otp.find({ email: email, otpCode: otpCode });

  if (data) {
    const currentTime = new Date().getTime();
    const difference = data.expiresIn - currentTime;
    // console.log(otpCode);
    // console.log(data[0].otpCode);
    if (difference < 0) {
      res.status(404).json({
        success: false,
        data: "Otp expired ",
      });
    } else if (Number(otpCode) !== Number(data[0].otpCode)) {
      res.status(404).json({
        success: false,
        data: "Otp not correct ",
      });
    } else {
      res.status(200).json({
        success: true,
      });
    }
  }
});

// 3. Send message of Otp
const sendMobileOtp = asyncHandler(async (req, res) => {
  const { mobileNumber } = req.body;
  const data = await Otp.findOne({ mobileNumber: mobileNumber });

  if (data) {
    // console.log(data._id);
    await Otp.findByIdAndRemove(data._id);
  }
  try {
    const otpCode = Math.floor(Math.random() * 1000000 + 1);
    const otpData = new Otp({
      mobileNumber: mobileNumber,
      otpCode: otpCode,
      expiresIn: new Date().getTime() + 300 * 1000,
    });
    console.log(mobileNumber);
    const response = await otpData.save();
    // res.status(200).json({
    //   success: true,
    //   data: response,
    // });

    client.messages
      .create({
        from: "+12162421648",
        to: "+91" + mobileNumber.toString(),
        body: `Welcome to XcitEducation. Your OTP for mobile number verification is ${otpCode}. Otp is valid for the next 5 minutes.`,
      })
      .then((message) => console.log(message.sid));

    // const from = "Vonage APIs";
    // const to = mobileNumber;
    // const text = `Welcome to Full Stack Simplified. Your OTP for mobile number verification is ${otpCode}. Otp is valid for the next 5 minutes.`;

    // vonage.message.sendSms(from, to, text, (err, responseData) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     if (responseData.messages[0]["status"] === "0") {
    //       console.log("Message sent successfully.");
    //     } else {
    //       console.log(
    //         `Message failed with error: ${responseData.messages[0]["error-text"]}`
    //       );
    //     }
    //   }
    // });
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: "Email does not exist ",
    });
  }
});

// 4. Check Mobile otp
const checkMobileOtp = asyncHandler(async (req, res) => {
  const { mobileNumber, otpCode } = req.body;

  const data = await Otp.find({ mobileNumber: mobileNumber, otpCode: otpCode });

  if (data) {
    // console.log(otpCode);
    // console.log(data[0].otpCode);
    const currentTime = new Date().getTime();
    const difference = data.expiresIn - currentTime;
    if (difference < 0) {
      res.status(404).json({
        success: false,
        data: "Otp expired ",
      });
    } else if (Number(otpCode) !== Number(data[0].otpCode)) {
      res.status(404).json({
        success: false,
        data: "Otp not correct ",
      });
    } else {
      res.status(200).json({
        success: true,
      });
    }
  }
});

module.exports = {
  sendEmail,
  checkOtp,
  sendMobileOtp,
  checkMobileOtp,
};
