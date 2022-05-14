const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

// Send email to user regarding the query
const contacUs = asyncHandler(async (req, res) => {
  const { name, email, number, description } = req.body;

  //   if (user) {
  const output = `
        '<h2>Query received regarding XcitEducation</h2>
      <h4>Details of the user are:</h3>
      <ul>
        <li>Name : ${name}</li>
        <li>Email : ${email}</li>
        <li>Mobile number : ${number}</li>
        <li>Query : ${description}</li>
      </ul>
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
    // from: '"Nodemailer Testing" <raj.sanghavi1@svkmmumbai.onmicrosoft.com>', // sender address
    from: "Team XcitEducation",
    to: `${process.env.XCITEDU_HR_EMAIL}`, // list of receivers
    subject: "Query received ✔", // Subject line
    // text: "Hello world?", // plain text body
    // html: "<b>Hello world?</b>", // html body
    html: output,
    // attachments: [
    //   {
    //     path: "/home/ubuntu/MYFOLDER/Cloned/E-Commerce/frontend/public/images/alexa.jpg",
    //   },
    // ],
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
        data: user,
      });
    }
  });
});

module.exports = { contacUs };
