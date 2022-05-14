const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

// Send email to user regarding the query
const careerForm = asyncHandler(async (req, res) => {
  const {
    jobType,
    name,
    email,
    mobileNumber,
    description,
    ySelected,
    linkedInProfile,
    githubProfile,
    resumeLink,
    jobList,
  } = req.body;

  //   if (user) {
  const output = `
        '<h2>Job Application received👻</h2>
      <h4>Details of the candidate are as follows:</h3>
      <ul>
        <li>Job Type : ${jobType}</li>
        <li>Name : ${name}</li>
        <li>Email : ${email}</li>
        <li>Mobile number : ${mobileNumber}</li>
        <li>Tell us something about yourself : <p>${description}</p></li>
        <li>Why do you think you should be selected : <p>${ySelected}</p></li>
        <li>LinkedIn Profile : <p>${linkedInProfile}</p></li>
        <li>Github Profile : <p>${githubProfile}</p></li>
        <li>Resume Link : <p>${resumeLink}</p></li>
        <li>Positions applying for : <p>${jobList}</p></li>
      </ul>
    `;
  // jobList.map((job) => ({
  //     job.jobName
  //   }))
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
    subject: "Job Application received ✔", // Subject line
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

module.exports = { careerForm };
