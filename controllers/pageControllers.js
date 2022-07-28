const nodemailer = require("nodemailer");

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render("index", {
    pageName: "index",
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    pageName: "about",
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render("register", {
    pageName: "register",
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    pageName: "login",
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render("contact", {
    pageName: "contact",
  });
};

exports.sendEmail = async (req, res) => {

  try {

  const outMessage = `
  <h1>Mail Details</h1>
  <ul>
    <li>Name: ${req.body.name} </li>
    <li>Email: ${req.body.email} </li>
  </ul>
  <h1>Message</h1>
  <p>${req.body.message}</p>

  `

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "ytan2877@gmail.com", // gmail account
      pass: "zcvddsgatjowkffh11" // gmail password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Smart Edu Contact Form" <ytan2877@gmail.com>', // sender address
    to: "batila96@gmail.com", // list of receivers
    subject: "Smart Edu Contact Form New Message ✔", // Subject line
    text: "Hello world?", // plain text body
    html: outMessage, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  req.flash("success", "We received your message succesfully");

  res.status(200).redirect('/contact');
} catch (err) {
  req.flash("error", `Something Happened! ${err}`);
  res.status(200).redirect('/contact');

}
}
