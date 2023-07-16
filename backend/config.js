import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch((err) => console.log(err.message));

export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
  from: "saeed_blooddonation@gmail.com",
});

transport.verify((err, succ) => {
  if (err) {
    console.log(err);
  } else if (succ) {
    console.log("Mail Service Connected");
  }
});

export const email_verification_options = (verification_token) => {
  return {
    from: "your-email@gmail.com",
    to: email,
    subject: "Email Verification",
    text: `Click the link to verify your email: http://localhost:3000/verify/${verification_token}`,
  };
};
