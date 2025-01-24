const Contact = require("../models/contact.model");

exports.contactUs = (req, res) => {
  const { name, email, subject, message } = req.body;

  const contact = new Contact({
    name,
    email,
    subject,
    message
  });

  contact.save((err, contact) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ message: "Contact message received successfully!" });
  });
};