import { User } from "../models/user.js";
import { Statistics } from "../models/statistics.js";
import bycrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { transport } from "../config.js";

export const userSignup = async (req, res) => {
  const { email, password, name, username, blood_group, gender, age, mobile_number } = req.body;
  let image = req.file?.filename;
  if (!email || !password || !name || !username || !blood_group || !gender || !age || !mobile_number) {
    return res.status(422).json({ error: "please fill all fields " });
  }

  try {
    const already_email = await User.findOne({ email });
    if (already_email) {
      return res.status(422).json({ error: "Email already registered" });
    }
    const already_username = await User.findOne({ username });
    console.log(already_username);

    if (already_username) {
      return res.status(422).json({ error: "Username already registered" });
    }
    const hashed_password = await bycrypt.hash(password, 10);
    const token = crypto.randomBytes(20).toString("hex");

    const user = new User({
      ...req.body,
      password: hashed_password,
      email_verification_token: token,
      image,
    });

    const save_user = await user.save();

    const mailOptions = {
      from: "blood-donation@gmail.com",
      to: save_user.email,
      subject: "Email Verification",
      text: `Blood Donation\nClick the link to verify your email: http://${process.env.CLIENT_DOMAIN}/email-verification-status/${token}\n`,
    };
    if (save_user) {
      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(422).json({ message: "Failed to send verification email" });
        }
        console.log("Verification email sent:", info.response);
      });
      res.json({ message: "Register successfully", data: { ...save_user, password: null } });
    }
  } catch (error) {
    console.log(error);
    return res.status(422).json({ error: "Something went wrong" });
  }
};

export const verifyEmail = async (req, res) => {
  const { token } = req.params;

  const response = await User.findOneAndUpdate({ email_verification_token: token }, { $set: { is_email_verified: true, email_verification_token: "" } }, { new: true });

  console.log({ email: response });

  if (response) {
    return res.json({ message: "Verified successfully" });
  } else {
    return res.status(422).json({ error: "Something went wrong resend link" });
  }
};

export const resendEmail = async (req, res) => {
  const { email } = req.params;
  const exists = await User.findOne({ email });
  const mailOptions = {
    from: "blood-donation@gmail.com",
    to: exists.email,
    subject: "Email Verification",
    text: `Blood Donation\nClick the link to verify your email: http://${process.env.CLIENT_DOMAIN}/email-verification-status/${exists.email_verification_token}\n`,
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(422).json({ message: "Failed to send verification email" });
    }
    console.log("Verification email sent:", info.response);
  });
  return res.json({ message: "Email sent successfull" });
};

export const userLogin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).json({ error: "please add username or password" });
  }
  User.findOne({ username })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "invalid username or password " });
      }
      bycrypt.compare(password, savedUser.password).then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
          savedUser.password = undefined;
          res.json({ message: "Successfull Login", token, user: savedUser });
        } else {
          return res.status(422).json({ error: "invalid username or password" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const userUpdate = async (req, res) => {
  const { _id } = req.params;
  const { password, is_savedlife } = req.body;

  let passwordUpdate = false;
  let newPassword;
  const currentDate = new Date();
  if (password) {
    passwordUpdate = true;
    newPassword = await bycrypt.hash(password, 10);
  }

  try {
    if (is_savedlife === true) {
      const updateData = await User.findByIdAndUpdate(_id, { $push: { donation_history: currentDate }, $set: { is_savedlife: true } });
      const counter = await Statistics.findOne();
      counter.donations_count += 1;
      await counter.save();
      if (updateData) {
        return res.json({ message: "Updated successfully", data: updateData });
      }
    } else if (is_savedlife === false) {
      const updateData = await User.findByIdAndUpdate(_id, { $set: { is_savedlife: false } });
      if (updateData) {
        return res.json({ message: "Updated successfully" });
      }
    }
    const updateData = passwordUpdate ? { ...req.body, password: newPassword } : req.body;
    await User.findByIdAndUpdate(_id, updateData);
    res.json({ message: "Updated successfully" });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong!" });
  }
};
export const userGet = async (req, res) => {
  let filter = {};
  if (req.query._id) {
    filter = { _id: req.query._id.split(","), isActive: true };
  }
  try {
    let result = await User.find(filter).select("-password");
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ error: "something went wrong!" });
  }
};

export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send("User not found");
  }

  const token = crypto.randomBytes(20).toString("hex");
  const expires = Date.now() + 3600000; // 1 hour
  user.reset_password_token = token;
  user.reset_password_expires = expires;
  await user.save();

  const mailOptions = {
    from: "blood-donation@gmail.com",
    to: email,
    subject: "Password Reset Request",
    text: `You are receiving this email because you (or someone else) has requested a password reset for your account.\n\n
             Please click on the following link, or paste it into your browser to reset your password:\n\n
             http://${process.env.CLIENT_DOMAIN}/reset/${token}\n\n
             This link will expire in one hour.\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  transport.sendMail(mailOptions, (err, response) => {
    if (err) {
      res.status(403).json({ error: "There was an error" });
    } else {
      console.log("here is the res:", response);
      res.status(200).json({ message: "Recovery email sent" });
    }
  });
};

export const resetPassword = async (req, res) => {
  const user = await User.findOne({
    reset_password_token: req.params.token,
    reset_password_expires: { $gt: Date.now() },
  });
  console.log(user);

  if (!user) {
    return res.status(404).json({ error: "Password reset token is invalid or has expired" });
  }

  const hashed_password = await bycrypt.hash(req.body.password, 12);
  user.password = hashed_password;
  user.reset_password_token = null;
  user.reset_password_expires = null;
  await user.save();

  res.status(200).json({ message: "Password has been reset" });
};
