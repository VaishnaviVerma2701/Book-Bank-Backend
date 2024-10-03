import nodemailer from 'nodemailer';
import Email  from '../model/emailModel.js';

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send an email
 export const sendEmail = async (req, res) => {
  const { email } = req.body;
  // create new Email
  const emailData = new Email({
    email
  });

  try {
    await emailData.save();

    await transporter.sendMail({
      from: `"Your Name" <${process.env.EMAIL_USER}>`,
      to:emailData.email,
      
    });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

